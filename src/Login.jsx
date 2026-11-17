import { useState } from "react";

function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function handleLogin() {
    try {
        const response = await fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
        });

        const data = await response.json();

        if (response.ok) {
          localStorage.setItem("access_token", data.access_token);
          onLoginSuccess();
          alert("Login successful!");
        } else {
          alert(data.detail);
        }

    } catch (error) {
        console.error("Login error:", error);
    }
  }
  return (
    <div>
      <h1>Login</h1>

      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;