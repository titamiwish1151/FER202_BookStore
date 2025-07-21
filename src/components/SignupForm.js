import { useState } from "react";

const SignupForm = ({ onSignup }) => {
  const [signupEmail, setSignupEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignup(signupEmail);
  };

  return (
    <div style={{ width: "100%", padding: "2rem", backgroundColor: "#eff6ff" }}>
      <h2
        style={{
          fontSize: "1.875rem",
          fontWeight: "bold",
          color: "#1f2937",
          marginBottom: "2rem",
        }}
      >
        Don't have an account yet?
      </h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
      >
        <div>
          <label
            htmlFor="signup-email"
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
            id="signup-email"
            style={{
              width: "100%",
              padding: "0.75rem 1rem",
              border: "1px solid #d1d5db",
              borderRadius: "0.5rem",
              outline: "none",
              fontSize: "1.125rem",
            }}
            value={signupEmail}
            onChange={(e) => setSignupEmail(e.target.value)}
            required
          />
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
          Create Account
        </button>
      </form>
    </div>
  );
};
export default SignupForm;
