import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderText from "./components/HeaderText";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HeaderText />
    <LoginForm />
    <RegisterForm />
    <App />
  </React.StrictMode>
);
