// eslint-disable-next-line no-unused-vars
import React from "react";
import HeaderText from "../components/HeaderText";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

console.log(HeaderText, LoginForm, RegisterForm);

function Login() {
  return (
    <div>
      <HeaderText />
      <LoginForm />
      <RegisterForm />
    </div>
  );
}
export default Login;
