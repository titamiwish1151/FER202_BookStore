const MainNavigation = () => (
  <div style={{ borderBottom: "1px solid #e5e7eb", padding: "1rem 0" }}>
    <div
      style={{
        maxWidth: "1280px",
        margin: "0 auto",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Logo */}
      <div style={{ flexShrink: 0 }}>
        {/* Added max-w-full and explicit width/height for better image sizing control */}
        <img
          src="https://www.ikea.com/global/assets/logos/logo-ikea.svg"
          alt="Vivlio Logo"
          style={{
            height: "2.5rem",
            width: "auto",
            maxWidth: "100%",
            display: "block",
          }} // Converted Tailwind classes to inline styles
          width="100" // Approximate width for h-10 (40px height)
          height="40" // Corresponds to h-10
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/100x40/0056b3/ffffff?text=IKEA";
          }}
        />
      </div>

      {/* Search Bar */}
      <div
        style={{
          flexGrow: 1,
          margin: "0 1rem",
          maxWidth: "32rem",
          position: "relative",
        }}
      >
        <input
          type="text"
          placeholder="Search for products, inspiration and content"
          style={{
            width: "100%",
            paddingLeft: "2.5rem",
            paddingRight: "1rem",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            borderRadius: "9999px",
            backgroundColor: "#f3f4f6",
            border: "1px solid #d1d5db",
            outline: "none",
          }}
        />
        {/* Search Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{
            height: "1.25rem",
            width: "1.25rem",
            position: "absolute",
            left: "0.75rem",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#6b7280",
          }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {/* Icons */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        {/* Calendar Icon */}
        <a href="#" style={{ color: "#4b5563", textDecoration: "none" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: "1.5rem", width: "1.5rem" }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7V3m8 4V3m-9 8h.01M7 12h.01M7 15h.01m12-12v12a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8v10h10v-2"
            />
          </svg>
        </a>
        {/* User Icon */}
        <a href="#" style={{ color: "#4b5563", textDecoration: "none" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: "1.5rem", width: "1.5rem" }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </a>
        {/* Heart Icon */}
        <a href="#" style={{ color: "#4b5563", textDecoration: "none" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: "1.5rem", width: "1.5rem" }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </a>
        {/* Shopping Cart Icon */}
        <a href="#" style={{ color: "#4b5563", textDecoration: "none" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: "1.5rem", width: "1.5rem" }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
);
export { MainNavigation };
