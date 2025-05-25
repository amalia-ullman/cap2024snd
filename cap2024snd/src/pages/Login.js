import { useState } from "react";

export default function Login() {
  const { username, setUsername } = useState("");
  const { password, setPassword } = useState("");

  return (
    <div>
      <h1>LOGIN</h1>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={username}
      ></input>
      <input
        type="text"
        name="password"
        placeholder="password"
        value={password}
      ></input>
    </div>
  );
}
