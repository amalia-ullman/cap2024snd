import { useState } from "react";
import { useNavigate } from "react-router";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [mode, setMode] = useState("login");
  const navigate = useNavigate();

  const storedUser = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");
  console.log(storedUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      localStorage.getItem("username").trim() == username.trim() &&
      localStorage.getItem("password").trim() == password.trim()
    ) {
      navigate(`/`);
    } else {
      setMessage("incorrect username or password");
    }
  };

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
