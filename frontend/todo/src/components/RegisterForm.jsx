import "bootstrap/dist/css/bootstrap.min.css";
import "../css/RegisterForm.css";
import "../css/FlexForm.css";
import { useState } from "react";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    /* SENT TO THE SERVER!!!!! */
    alert(`The name is ${username}, password ${password}`);
  };

  return (
    <div className="registerForm">
      <div className="card cardRegister">
        <div className="card-body">
          <div className="bodyHeader"></div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
