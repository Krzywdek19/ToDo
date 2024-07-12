import "bootstrap/dist/css/bootstrap.min.css";
import "../css/LoginForm.css";

function LoginForm() {
  return (
    <div className="loginForm">
      <div className="card">
        <div className="card-body">
          <div className="bodyHeader">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              fill="#595959"
              className="bi bi-caret-right-fill pointerRight"
              viewBox="0 0 16 16"
            >
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
            </svg>
            <p className="loginHeader">Login</p>
          </div>
          <hr className="headerLine"></hr>
          {/* Form */}
          <form className="formLogin pt-4">
            {/* ------ USERNAME ------ */}
            <div className="formUsername py-5">
              <label
                htmlFor="username"
                className="usernameText fs-4 fw-semibold"
              >
                Username:
              </label>
              <br />
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                className="formInput"
              ></input>
            </div>
            {/* ------ PASSWORD ------ */}
            <div className="formPassword">
              <label
                htmlFor="password"
                className="passwordText fs-4 fw-semibold"
              >
                Password:
              </label>
              <br />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="formInput"
              ></input>
            </div>
            <div className="formBtnLogin">
              <input
                type="submit"
                value="Login"
                className="loginBtn fw-semibold"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
