import { useState } from "react";

const LoginForm = ({ onLogin }) => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email: loginEmail, password: loginPassword });
  };

  return (
    <div
      style={{
        width: "100%",
        padding: "2rem",
        borderRight: "1px solid #e5e7eb",
      }}
    >
      <h2
        style={{
          fontSize: "2.25rem",
          fontWeight: "bold",
          color: "#1f2937",
          marginBottom: "2rem",
        }}
      >
        Login
      </h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
      >
        <div>
          <label
            htmlFor="login-email"
            style={{
              display: "block",
              fontSize: "1.125rem",
              fontWeight: "500",
              color: "#374151",
              marginBottom: "0.75rem",
            }}
          >
            Email
          </label>
          <input
            type="email"
            id="login-email"
            style={{
              width: "100%",
              padding: "0.75rem 1rem",
              border: "1px solid #d1d5db",
              borderRadius: "0.5rem",
              outline: "none",
              fontSize: "1.125rem",
            }}
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            required
          />
        </div>
        <div style={{ position: "relative" }}>
          <label
            htmlFor="login-password"
            style={{
              display: "block",
              fontSize: "1.125rem",
              fontWeight: "500",
              color: "#374151",
              marginBottom: "0.75rem",
            }}
          >
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="login-password"
            style={{
              width: "100%",
              padding: "0.75rem 1rem",
              border: "1px solid #d1d5db",
              borderRadius: "0.5rem",
              outline: "none",
              fontSize: "1.125rem",
            }}
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            required
          />
        </div>
        <div style={{ textAlign: "right" }}>
          <a
            href="/lost-password"
            style={{
              fontSize: "1rem",
              color: "#2563eb",
              textDecoration: "none",
            }}
          >
            Forgot your password?
          </a>
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "0.75rem 1rem",
            backgroundColor: "#2563eb",
            color: "#fff",
            fontWeight: "600",
            borderRadius: "9999px",
            boxShadow:
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            border: "none",
            cursor: "pointer",
            fontSize: "1.125rem",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};
export default LoginForm;
