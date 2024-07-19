/* eslint-disable no-unused-vars */
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/RegisterForm.css";
import { useState, useEffect, useRef } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../api/axios";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const RegisterForm = () => {
  const userRef = useRef();
  const errRef = useRef();

  /* User */
  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  /* Password */
  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  /* Matching */
  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  /* Error / Success */
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  /* ----- Hooks ----- */
  useEffect(() => {
    userRef.current.focus();
  }, []);
  /* User Hook */
  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  /* Pwd Hook */
  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  /* Error */
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  /* ----------- */
  /* const handleSubmitRegister = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/register", {
        username: user,
        password: pwd,
      });
      alert(`User registered: ${response.data.username}`);
    } catch (err) {
      console.error(err);
      alert("Registration failed");
    }
  }; */

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
          <section>
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>

            <form
              className="formRegister pt-2" /* onSubmit={handleSubmitRegister} */
            >
              {/* ------ USERNAME ------*/}
              <div className="formUsernameRegister py-2">
                <label
                  className="usernameTextRegister fs-4 fw-semibold"
                  htmlFor="username"
                >
                  Username: &nbsp;
                  <span className={validName ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <span className={validName || !user ? "hide" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                </label>
                <br />
                <input
                  type="text"
                  id="username"
                  ref={userRef}
                  autoComplete="off"
                  required
                  aria-invalid={validName ? "false" : "true"}
                  aria-describedby="uidnote"
                  onChange={(e) => setUser(e.target.value)}
                  placeholder="Enter your username"
                  className="formInputRegister"
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                />
                {/* Checks, if the username is valid with REGEX and giving instructions*/}
                <p
                  id="uidnote"
                  className={
                    userFocus && !validName && user
                      ? "instructions"
                      : "offscreen"
                  }
                >
                  <FontAwesomeIcon icon={faInfoCircle} />
                  &nbsp;4 to 24 character.
                  <br />
                  Must begin with a letter.
                  <br />
                  Letters, numbers, underscores, hyphens allowed.
                </p>
              </div>
              {/* ------ PASSWORD ------ */}
              <div className="formPasswordRegister">
                <label
                  className="passwordTextRegister fs-4 fw-semibold"
                  htmlFor="password"
                >
                  Password:&nbsp;
                  <span className={validPwd ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <span className={validPwd || !pwd ? "hide" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                </label>
                <br />
                <input
                  type="password"
                  id="password"
                  required
                  aria-invalid={validPwd ? "false" : "true"}
                  aria-describedby="pwdnote"
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                  onChange={(e) => setPwd(e.target.value)}
                  placeholder="Enter your password"
                  className="formInputRegister"
                />
                <p
                  id="pwdnote"
                  className={
                    pwdFocus && !validPwd ? "instructions" : "offscreen"
                  }
                >
                  <FontAwesomeIcon icon={faInfoCircle} />
                  &nbsp;8 to 24 character.
                  <br />
                  Must include uppercase and lowercase letters,
                  <br /> a numer and a special character.
                  <br />
                  Allowed special characters:{" "}
                  <span aria-label="exclamation mark">!</span>
                  <span aria-label="at symbol">@</span>{" "}
                  <span aria-label="hashtag">#</span>
                  <span aria-label="percent">%</span>
                </p>
              </div>
              {/* ------ CONFIRM PASSWORD ------ */}
              <div className="formPasswordRegister">
                <label
                  className="passwordTextRegister fs-4 fw-semibold"
                  htmlFor="confirm_pwd"
                >
                  Confirm Password:&nbsp;
                  <span className={validMatch && matchPwd ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                </label>
                <br />
                <input
                  type="password"
                  id="confirm_pwd"
                  required
                  aria-invalid={validMatch ? "false" : "true"}
                  aria-describedby="confirmnote"
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                  onChange={(e) => setMatchPwd(e.target.value)}
                  placeholder="Enter your password"
                  className="formInputRegister"
                />
                <p
                  id="confirmnote"
                  className={
                    matchFocus && !validMatch ? "instructions" : "offscreen"
                  }
                >
                  <FontAwesomeIcon icon={faInfoCircle} />
                  &nbsp;Must match the first password input field.
                </p>
              </div>
              {/* SUBMIT */}
              <div className="formBtnRegister">
                <input
                  type="submit"
                  value="Register"
                  className="registerBtn fw-semibold"
                ></input>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
