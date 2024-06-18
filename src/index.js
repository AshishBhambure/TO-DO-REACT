import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { ToastContainer, toast } from 'react-toastify';
import  { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <React.StrictMode>
    <ToastContainer>
    
    </ToastContainer>
    <App />
    
  </React.StrictMode>
);
