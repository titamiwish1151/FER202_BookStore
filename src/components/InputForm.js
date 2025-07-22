import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../features/auth/authSlice"; // Đảm bảo đường dẫn đúng

// --- Inline SVG Icons for Eye/Eye-Off (re-used here for password field) ---
const EyeIcon = ({ onClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{
      position: "absolute",
      right: "0.75rem",
      top: "50%",
      transform: "translateY(-50%)",
      cursor: "pointer",
      color: "#6b7280",
    }}
    onClick={onClick}
  >
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = ({ onClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{
      position: "absolute",
      right: "0.75rem",
      top: "50%",
      transform: "translateY(-50%)",
      cursor: "pointer",
      color: "#6b7280",
    }}
    onClick={onClick}
  >
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-10-7-10-7a1.8 1.8 0 0 1 0-.31M22 12s-3 7-10 7c-1.76 0-3.5-1.02-4.92-2.65M12 12a3 3 0 1 0-3-3" />
    <path d="m2 2 20 20" />
  </svg>
);

// --- Component: InputForm (Account Creation Page) ---
const InputForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Lấy email đã được lưu từ Redux state (từ action signup ban đầu)
  const currentUserEmail = useSelector(
    (state) => state.auth.user?.email || "your_email@example.com"
  );

  const [validationCode, setValidationCode] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [secondLastName, setSecondLastName] = useState(""); // Optional
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+1"); // Default to +1 for Puerto Rico/USA
  const [agreeCommercial, setAgreeCommercial] = useState(false);
  const [agreePolicies, setAgreePolicies] = useState(false);

  // Simple password validation state
  const [passwordError, setPasswordError] = useState("");

  // Example country codes - you can expand this list
  const countryCodes = [
    "+1 (USA/PR)",
    "+44 (UK)",
    "+49 (Germany)",
    "+84 (Vietnam)",
  ];

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    // Basic password validation
    if (newPassword.length < 8) {
      setPasswordError("Min. 8 characters");
    } else if (!/[0-9]/.test(newPassword)) {
      setPasswordError("1 number");
    } else if (!/[A-Z]/.test(newPassword)) {
      setPasswordError("1 uppercase");
    } else if (!/[a-z]/.test(newPassword)) {
      setPasswordError("1 lowercase");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (passwordError) {
      alert("Please fix password errors before submitting.");
      return;
    }
    if (!agreePolicies) {
      alert("You must agree to the Privacy Policy and Purchase Conditions.");
      return;
    }

    const formData = {
      email: currentUserEmail, // Bao gồm email lấy từ Redux state
      validationCode,
      firstName,
      lastName,
      secondLastName,
      password,
      phoneNumber: `${countryCode} ${phoneNumber}`,
      agreeCommercial,
      agreePolicies,
    };

    console.log("Completing Sign Up with:", formData);

    // Dispatch action để cập nhật thông tin người dùng trong Redux store.
    // Action này cũng sẽ đặt isLoggedIn thành true.
    dispatch(updateUserProfile(formData));

    // Lưu dữ liệu vào localStorage
    try {
      localStorage.setItem("ikea_signup_data", JSON.stringify(formData));
      alert(
        "Sign up complete! Data saved to localStorage and Redux state. (This is a demo)"
      );
    } catch (error) {
      console.error("Failed to save data to localStorage:", error);
      alert("Sign up complete, but failed to save data to localStorage.");
    }

    // Điều hướng đến trang thành công hoặc trang đăng nhập sau khi hoàn tất
    navigate("/"); // Ví dụ: điều hướng trở lại trang đăng nhập
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "2rem auto",
        padding: "2rem",
        backgroundColor: "#fff",
        borderRadius: "0.5rem",
        boxShadow:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#1f2937",
          marginBottom: "1.5rem",
          textAlign: "center",
        }}
      >
        Let's create your Vivilio account
      </h1>
      <p
        style={{
          fontSize: "1.125rem",
          color: "#4b5563",
          marginBottom: "2rem",
          textAlign: "center",
        }}
      >
        This is the first step to enjoy all the advantages of the website
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {/* Validation Code */}
        <div
          style={{
            backgroundColor: "#e0f2fe",
            borderLeft: "4px solid #0056b3",
            padding: "1rem",
            borderRadius: "0.25rem",
          }}
        >
          <p
            style={{
              fontSize: "0.9rem",
              color: "#0056b3",
              marginBottom: "0.5rem",
            }}
          >
            Please, enter the code that we have sent you to{" "}
            <span style={{ fontWeight: "bold" }}>{currentUserEmail}</span>
          </p>
          <label
            htmlFor="validation-code"
            style={{
              display: "block",
              fontSize: "0.9rem",
              color: "#4b5563",
              marginBottom: "0.25rem",
            }}
          >
            Validation Code
          </label>
          <input
            type="text"
            id="validation-code"
            value={validationCode}
            onChange={(e) => setValidationCode(e.target.value)}
            style={{
              width: "100%",
              padding: "0.75rem",
              border: "1px solid #d1d5db",
              borderRadius: "0.25rem",
              fontSize: "1rem",
            }}
            required
          />
        </div>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          {/* First Name */}
          <div>
            <label
              htmlFor="first-name"
              style={{
                display: "block",
                fontSize: "0.9rem",
                color: "#4b5563",
                marginBottom: "0.25rem",
              }}
            >
              First Name
            </label>
            <input
              type="text"
              id="first-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #d1d5db",
                borderRadius: "0.25rem",
                fontSize: "1rem",
              }}
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="last-name"
              style={{
                display: "block",
                fontSize: "0.9rem",
                color: "#4b5563",
                marginBottom: "0.25rem",
              }}
            >
              Last Name
            </label>
            <input
              type="text"
              id="last-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #d1d5db",
                borderRadius: "0.25rem",
                fontSize: "1rem",
              }}
              required
            />
          </div>

          {/* Second Last Name (optional) */}
          <div>
            <label
              htmlFor="second-last-name"
              style={{
                display: "block",
                fontSize: "0.9rem",
                color: "#4b5563",
                marginBottom: "0.25rem",
              }}
            >
              Second Last Name (optional)
            </label>
            <input
              type="text"
              id="second-last-name"
              value={secondLastName}
              onChange={(e) => setSecondLastName(e.target.value)}
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #d1d5db",
                borderRadius: "0.25rem",
                fontSize: "1rem",
              }}
            />
          </div>

          {/* Password */}
          <div style={{ position: "relative" }}>
            <label
              htmlFor="password"
              style={{
                display: "block",
                fontSize: "0.9rem",
                color: "#4b5563",
                marginBottom: "0.25rem",
              }}
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={handlePasswordChange}
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #d1d5db",
                borderRadius: "0.25rem",
                fontSize: "1rem",
              }}
              required
            />
            {showPassword ? (
              <EyeOffIcon onClick={() => setShowPassword(false)} />
            ) : (
              <EyeIcon onClick={() => setShowPassword(true)} />
            )}
            {passwordError && (
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "#ef4444",
                  marginTop: "0.25rem",
                }}
              >
                Min. 8 characters (1 number, 1 uppercase, 1 lowercase)
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="phone-number"
              style={{
                display: "block",
                fontSize: "0.9rem",
                color: "#4b5563",
                marginBottom: "0.25rem",
              }}
            >
              Phone
            </label>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                style={{
                  padding: "0.75rem",
                  border: "1px solid #d1d5db",
                  borderRadius: "0.25rem",
                  fontSize: "1rem",
                  backgroundColor: "#fff",
                }}
              >
                {countryCodes.map((code) => (
                  <option key={code} value={code.split(" ")[0]}>
                    {code}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                id="phone-number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                style={{
                  flex: "1",
                  padding: "0.75rem",
                  border: "1px solid #d1d5db",
                  borderRadius: "0.25rem",
                  fontSize: "1rem",
                }}
                required
              />
            </div>
          </div>

          {/* Checkbox: Agree to commercial communications */}
          <div
            style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}
          >
            <input
              type="checkbox"
              id="agree-commercial"
              checked={agreeCommercial}
              onChange={(e) => setAgreeCommercial(e.target.checked)}
              style={{
                marginTop: "0.25rem",
                minWidth: "1rem",
                minHeight: "1rem",
              }}
            />
            <label
              htmlFor="agree-commercial"
              style={{
                fontSize: "0.9rem",
                color: "#4b5563",
                lineHeight: "1.25",
              }}
            >
              I agree to receive commercial communications by email and SMS, and
              I can easily unsubscribe at any time.
            </label>
          </div>

          {/* Checkbox: Agree to policies */}
          <div
            style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}
          >
            <input
              type="checkbox"
              id="agree-policies"
              checked={agreePolicies}
              onChange={(e) => setAgreePolicies(e.target.checked)}
              style={{
                marginTop: "0.25rem",
                minWidth: "1rem",
                minHeight: "1rem",
              }}
              required // This checkbox is mandatory for submission
            />
            <label
              htmlFor="agree-policies"
              style={{
                fontSize: "0.9rem",
                color: "#4b5563",
                lineHeight: "1.25",
              }}
            >
              By clicking on "Complete sign-up" I accept: The{" "}
              <a
                href="#"
                style={{
                  color: "#0056b3",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Privacy Policy
              </a>{" "}
              and the{" "}
              <a
                href="#"
                style={{
                  color: "#0056b3",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Purchase Conditions
              </a>
              .
            </label>
          </div>

          {/* Complete Sign-up Button */}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "0.75rem 1rem",
              backgroundColor: "#0056b3",
              color: "#fff",
              fontWeight: "600",
              borderRadius: "9999px",
              border: "none",
              fontSize: "1.125rem",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
              marginTop: "1.5rem",
              opacity: agreePolicies ? 1 : 0.6,
              pointerEvents: agreePolicies ? "auto" : "none",
            }}
          >
            Complete sign-up
          </button>
        </form>

        {/* Login Link */}
        <p
          style={{
            textAlign: "center",
            fontSize: "0.9rem",
            color: "#4b5563",
            marginTop: "1.5rem",
          }}
        >
          Do you have an account?{" "}
          <Link
            to="/login"
            style={{
              color: "#0056b3",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default InputForm;
