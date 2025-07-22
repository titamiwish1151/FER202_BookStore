const SubNavigation = () => (
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
          <a
            href="/new-books"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            New Books
          </a>
        </li>
        <li>
          <a
            href="/Category"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Category
          </a>
        </li>
        <li>
          <a
            href="/authors"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Authors
          </a>
        </li>
        <li>
          <a href="/ideas" style={{ textDecoration: "none", color: "inherit" }}>
            Ideas and inspiration
          </a>
        </li>
      </ul>
    </div>
  </nav>
);
export default SubNavigation;
