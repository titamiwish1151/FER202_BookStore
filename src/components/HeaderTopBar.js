import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch and useSelector
import { logout } from "../features/auth/authSlice";

export default function HeaderTopBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Lấy trạng thái đăng nhập và thông tin người dùng từ Redux store
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);

  const [location, setLocation] = useState("Puerto Rico");
  const [language, setLanguage] = useState("English");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State để quản lý hiển thị dropdown

  // Available options (for simplicity, you can expand this)
  const locations = ["Puerto Rico", "USA", "Canada"];
  const languages = ["English", "Vietnamese"];

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleProfileClick = () => {
    navigate("/input-form"); // Điều hướng đến trang hồ sơ người dùng
    setIsDropdownOpen(false); // Đóng dropdown
  };

  const handleLogout = () => {
    dispatch(logout()); // Dispatch action logout
    localStorage.removeItem("ikea_signup_data"); // Xóa dữ liệu đăng ký từ localStorage
    navigate("/"); // Điều hướng về trang chủ
    setIsDropdownOpen(false); // Đóng dropdown
  };

  // Logic để đóng dropdown khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Kiểm tra xem click có nằm ngoài vùng dropdown hay không
      if (
        isDropdownOpen &&
        event.target.closest(".user-dropdown-container") === null
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]); // Chỉ chạy lại khi isDropdownOpen thay đổi

  return (
    <header
      style={{
        backgroundColor: "#fff",
        color: "#4b5563",
        fontSize: "0.875rem",
        borderBottom: "1px solid #e5e7eb",
        padding: "0.5rem 0",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          {/* Location Selector */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ height: "1rem", width: "1rem", marginRight: "0.25rem" }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              width="16"
              height="16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <select
              value={location}
              onChange={handleLocationChange}
              style={{
                border: "none",
                outline: "none",
                backgroundColor: "transparent",
                color: "inherit",
                fontSize: "inherit",
                cursor: "pointer",
                appearance: "none", // Hide default dropdown arrow
                paddingRight: "1rem", // Space for custom arrow if added
              }}
            >
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>
          {/* Language Selector */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ height: "1rem", width: "1rem", marginRight: "0.25rem" }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              width="16"
              height="16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.5 10a18.022 18.022 0 00-3.5 4.5M15 15a18.022 18.022 0 01-3.5-4.5m-1.048 9.5A18.022 18.022 0 0018.5 10a18.022 18.022 0 013.5 4.5M6 10h12"
              />
            </svg>
            <select
              value={language}
              onChange={handleLanguageChange} // Changed from onClick to onChange for select
              style={{
                border: "none",
                outline: "none",
                backgroundColor: "transparent",
                color: "inherit",
                fontSize: "inherit",
                cursor: "pointer",
                appearance: "none", // Hide default dropdown arrow
                paddingRight: "1rem", // Space for custom arrow if added
              }}
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
          </div>
          <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
            Home
          </a>
          <a
            href="/best-seller"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Best Sellers
          </a>
          <a
            href="/contact"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Contact
          </a>
          <a
            href="/companies"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Companies
          </a>
        </div>
        <div
          style={{ position: "relative" }}
          className="user-dropdown-container"
        >
          {isLoggedIn && user ? (
            <button
              onClick={toggleDropdown}
              style={{
                fontWeight: "bold",
                textDecoration: "none",
                color: "inherit",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                fontSize: "0.875rem",
                display: "flex",
                alignItems: "center",
                gap: "0.25rem",
                padding: "0.25rem 0.5rem",
                borderRadius: "0.25rem",
                outline: "none",
              }}
            >
              Welcome, {user.firstName || user.email?.split("@")[0] || "User"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          ) : (
            <Link
              to="/login"
              style={{
                fontWeight: "bold",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              Login or Register
            </Link>
          )}

          {isDropdownOpen && isLoggedIn && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                right: 0,
                backgroundColor: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: "0.25rem",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                minWidth: "150px",
                zIndex: 1000,
                padding: "0.5rem 0",
              }}
            >
              <button
                onClick={handleProfileClick}
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "0.75rem 1rem",
                  border: "none",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                  color: "#4b5563",
                  display: "block",
                  whiteSpace: "nowrap",
                }}
              >
                My Profile
              </button>
              <button
                onClick={handleLogout}
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "0.75rem 1rem",
                  border: "none",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                  color: "#4b5563",
                  display: "block",
                  whiteSpace: "nowrap",
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
