import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [mode, setMode] = useState("login");
  const navigate = useNavigate();

  // const storedUser = localStorage.getItem("username");
  // const storedPassword = localStorage.getItem("password");
  // console.log(storedUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/auth/login", { username, password })
      .then((res) => {
        console.log(res);
        if (res.status == 201) {
          navigate(`/`);
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.status == 400) {
          setMessage(error.response.data.error);
        }
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/auth")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  });

  const handleUserChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const toggleMode = () => {
    if (mode == "login") {
      setMode("register");
    } else {
      setMode("login");
    }
  };

  return (
    <div>
      <h1>{mode}</h1>
      <button onClick={toggleMode}>
        {mode == "login" ? "Register" : "Login"}
      </button>
      <h1>{message ? message : null}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={handleUserChange}
        ></input>
        <input
          type="text"
          name="password"
          placeholder="password"
          value={password}
          onChange={handlePasswordChange}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
}
