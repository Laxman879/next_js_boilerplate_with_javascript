import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!username || !password) {
      // Check if username and password are provided
      alert("Please enter both username and password");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    console.log("All users:", users);

    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      localStorage.setItem("token", user.token);
      console.log("Logged in user:", user);
      alert("Successfully logged in!");
      router.push("/");
    } else {
      console.log("Invalid credentials");
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container">
      <div className="login-container">
        <h1>User Login </h1>
        <input
          type="text"
          placeholder="User name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="button-container">
          {/* Your login button and style */}
          <button onClick={handleLogin} className="login-button">
            Login
          </button>
        </div>
        <p>
          <span>Dont have an account?</span>
          <Link href="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
