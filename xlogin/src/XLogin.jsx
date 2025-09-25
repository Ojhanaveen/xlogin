import { useState } from "react";

export default function XLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // ✅ store error/success message

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "user" && password === "password") {
      setMessage("Welcome, user!"); // ✅ success case
    } else {
      setMessage("Invalid username or password"); // ✅ error case
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <form onSubmit={handleSubmit}>
        <h2>Login Page</h2>

        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {/* ✅ show message below form */}
      {message && (
        <p
          style={{
            marginTop: "10px",
            color: message === "Welcome, user!" ? "green" : "red",
            fontWeight: "bold",
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
}
