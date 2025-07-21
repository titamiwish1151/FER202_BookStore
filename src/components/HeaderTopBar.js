const HeaderTopBar = () => (
  // Removed 'hidden' class to make it visible on all screen sizes by default.
  // 'md:block' is also removed as 'block' is often the default display for header.
  <header
    style={{
      backgroundColor: "#fff",
      color: "#4b5563",
      fontSize: "0.875rem",
      borderBottom: "1px solid #e5e7eb",
      padding: "0.5rem 0",
    }}
  >
    {/* Changed max-w-7xl mx-auto to w-full to make the header content span full width */}
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
      <div style={{ display: "flex", gap: "1.5rem" }}>
        <span style={{ display: "flex", alignItems: "center" }}>
          {/* Location Icon - Added explicit width and height */}
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
          Puerto Rico
        </span>
        <span style={{ display: "flex", alignItems: "center" }}>
          {/* Language Icon - Added explicit width and height */}
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
          English
        </span>
        <a href="/best-seller" style={{ textDecoration: "none", color: "inherit" }}>
          Home
        </a>
        <a href="/writer" style={{ textDecoration: "none", color: "inherit" }}>
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
export { HeaderTopBar };
