import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "@mui/material";
import { theme } from "./test.js";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
createRoot(document.getElementById("root")).render(
 <Provider store={store}>
   <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
 </Provider>
);
