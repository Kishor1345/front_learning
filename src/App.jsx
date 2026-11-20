import { Route, Routes } from "react-router"
import Navbar from "./pages/Navbar"
import Home from "./pages/Home"
import EmployeeDetails from "./pages/EmployeeDetails"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import Inbox from "./pages/Inbox"

const App = ()=>{
  return(
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/employeedetails" element={<EmployeeDetails/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/inbox" element={<Inbox/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App