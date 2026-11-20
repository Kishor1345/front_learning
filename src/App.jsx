import { Route, Routes } from "react-router"
import Navbar from "./pages/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import Product from "./pages/Product"

const App = ()=>{
  return(
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App