import { useEffect, useState } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

const AuthPage = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768); // Check initial width

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768); // Update state on resize
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);

  const handleLogin = ({ email, password }) => {
    console.log("Đăng nhập:", { email, password });
    // Add actual login logic here (e.g., API call)
  };

  const handleSignup = (email) => {
    console.log("Đăng ký tài khoản mới với email:", email);
    // Add actual signup logic here (e.g., API call)
  };

  return (
    <div
      style={{
        maxWidth: "1280px",
        margin: "0 auto",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        paddingTop: "2rem",
        paddingBottom: "4rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: isDesktop ? "row" : "column", // Dynamic flexDirection based on screen width
          backgroundColor: "#fff",
          borderRadius: "0.5rem",
          boxShadow:
            "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          overflow: "hidden",
        }}
      >
        <LoginForm onLogin={handleLogin} />
        <SignupForm onSignup={handleSignup} />
      </div>
    </div>
  );
};
export default AuthPage;
