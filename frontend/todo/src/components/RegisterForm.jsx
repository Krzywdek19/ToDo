import "bootstrap/dist/css/bootstrap.min.css";
import "../css/RegisterForm.css";
import { useState } from "react";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitRegister = (event) => {
    event.preventDefault();
    /* SENT TO THE SERVER!!!!! */
    alert(`The name is ${username}, password ${password}`);
  };

  return (
    <div className="registerForm">
      <div className="card cardRegister">
        <div className="card-body">
          <div className="bodyHeader">
            <p className="registerHeader">Register</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              fill="#595959"
              className="bi bi-caret-left-fill"
              viewBox="0 0 16 16"
            >
              <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
            </svg>
          </div>
          <hr className="headerLine"></hr>
          {/* Form */}
          <form className="formRegister pt-4" onSubmit={handleSubmitRegister}>
            {/* ------ USERNAME ------*/}
            <div className="formUsernameRegister py-5">
              <label className="usernameTextRegister fs-4 fw-semibold">
                Username:
              </label>
              <br />
              <input
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                placeholder="Enter your username"
                className="formInputRegister"
              ></input>
            </div>
            {/* ------ PASSWORD ------ */}
            <div className="formPasswordRegister">
              <label className="passwordTextRegister fs-4 fw-semibold">
                Password:
              </label>
              <br />
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Enter your password"
                className="formInputRegister"
              ></input>
            </div>
            <div className="formBtnRegister">
              <input
                type="submit"
                value="Register"
                className="registerBtn fw-semibold"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
