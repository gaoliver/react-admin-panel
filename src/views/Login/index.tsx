import { useState } from "react";
import { CgScreen } from "react-icons/all";

import { users } from "../../service/mockData";

import "./index.scss";

function Login() {
  const [emailAlert, setEmailAlert] = useState("");
  const [passwordAlert, setPasswordAlert] = useState("");
  const usersFiltered = users.filter(
    (x) => x.type !== "student" && x.state === "approved"
  );
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  // verify email
  function verifyUserEmail() {
    let user = usersFiltered.find((x) => x.email === login.email);

    if (user) {
      return {
        userEmail: user.email,
        userPassword: user.password,
        id: user.id,
      };
    } else {
      return setEmailAlert("Email address not found.");
    }
  }

  //   Verify data
  function verifyInputFields(email: string, password: string, id: number) {
    if (login.email === "") {
      setEmailAlert("Email required.");
      return;
    } else if (login.password === "") {
      setEmailAlert("");
      setPasswordAlert("Password required.")
      return;
    } else if (login.password !== password) {
      setEmailAlert("");
      setPasswordAlert("The password is incorrect. Try again.");
      return;
    } else if (login.email === email && login.password === password) {
      localStorage.setItem('@admin/userId', id.toString())
      return window.location.reload();
    }
  }

  // Enter to the account
  const handleLogin = () => {
    const verify = verifyUserEmail();
    if (verify) {
      verifyInputFields(verify.userEmail, verify.userPassword, verify.id);
    }
  };
  return (
    <div className="login-screen container-fluid">
      <div className="login-box">
        {/* App title */}
        <div className="row" id="sidebar-title">
          <CgScreen size="1.5rem" />
          <h4>Admin Panel</h4>
        </div>
        {/* Login Form */}
        <div className="form-login">
          {/* Email */}
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={login?.email}
              onChange={(text) => {
                setLogin({ ...login, email: text.target.value });
              }}
              required
            />
            {emailAlert === "" ? null : (
              <div id="emailHelp" className="wrong alert-danger">
                {emailAlert}
              </div>
            )}
          </div>
          {/* Password */}
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={login?.password}
              onChange={(text) => {
                setLogin({ ...login, password: text.target.value });
              }}
              required
            />
            {passwordAlert === "" ? null : (
              <div id="emailHelp" className="wrong alert-danger">
                {passwordAlert}
              </div>
            )}
          </div>
          {/* Enter button */}
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleLogin}
          >
            Enter
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
