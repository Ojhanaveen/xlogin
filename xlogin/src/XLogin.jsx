import { useState } from "react";

export default function XLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // If fields are empty, browser will handle with "Please fill out this field."
    // because of the 'required' attribute.

    if (username === "user" && password === "password") {
      alert("Welcome, user!");
    } else {
      alert("Invalid username or password");
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
            required   // ✅ Forces browser to show "Please fill out this field."
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            required   // ✅ Same for password
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
