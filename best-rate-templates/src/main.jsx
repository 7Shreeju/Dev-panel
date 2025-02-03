import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../src/assets/scss/style.scss";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Authprovider } from './store/auth.jsx';

createRoot(document.getElementById("root")).render(
  
    <StrictMode>
      <BrowserRouter>
      <Authprovider>
        <App />
        <ToastContainer/>
        </Authprovider>
      </BrowserRouter>
    </StrictMode>
);
