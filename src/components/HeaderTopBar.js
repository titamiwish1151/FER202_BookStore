import { useState } from "react";

export default function HeaderTopBar() {
  const [location, setLocation] = useState("Puerto Rico");
  const [language, setLanguage] = useState("English");

  // Available options (for simplicity, you can expand this)
  const locations = ["Puerto Rico", "USA", "Canada"];
  const languages = ["English", "Vietnamese"];

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

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
          {" "}
          {/* Added alignItems: 'center' here */}
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
              onClick={handleLanguageChange}
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
          <a href="/best-seller" style={{ textDecoration: "none", color: "inherit" }}>
            Best Sellers
          </a>
          <a href="/contact" style={{ textDecoration: "none", color: "inherit" }}>
            Contact
          </a>
          <a href="/companies" style={{ textDecoration: "none", color: "inherit" }}>
            Companies
          </a>
        </div>
        <div>
          <a
            href="/login"
            style={{
              fontWeight: "bold",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            Login or Register
          </a>
        </div>
      </div>
    </header>
  );
}
