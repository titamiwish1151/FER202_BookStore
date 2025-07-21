const SubNavigation = () => (
  // Removed 'hidden' class to make it visible on all screen sizes by default.
  // 'md:block' is also removed as 'block' is often the default display for nav.
  <nav
    style={{
      backgroundColor: "#fff",
      padding: "0.75rem 0",
      borderBottom: "1px solid #e5e7eb",
    }}
  >
    <div
      style={{
        maxWidth: "1280px",
        margin: "0 auto",
        paddingLeft: "1rem",
        paddingRight: "1rem",
      }}
    >
      <ul
        style={{
          display: "flex",
          justifyContent: "flex-start",
          gap: "2rem",
          color: "#4b5563",
          fontWeight: "500",
          listStyle: "none",
          padding: 0,
        }}
      >
        <li>
          <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
            Products
          </a>
        </li>
        <li>
          <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
            All Rooms
          </a>
        </li>
        <li>
          <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
            Online catalogs
          </a>
        </li>
        <li>
          <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
            New
          </a>
        </li>
        <li>
          <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
            Ideas and inspiration
          </a>
        </li>
        <li>
          <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
            Special prices
          </a>
        </li>
      </ul>
    </div>
  </nav>
);
export default SubNavigation;
