// src/components/MainNavigation.jsx
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MainNavigation = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div
      style={{
        borderBottom: "1px solid #e5e7eb",
        padding: "1rem 0",
        position: "relative",
        backgroundColor: "#fff",
        zIndex: 10,
      }}
    >
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
        {/* Logo with Link to Home */}
        <Link to="/">
          <img
            src="https://www.ikea.com/global/assets/logos/logo-ikea.svg"
            alt="Logo"
            style={{ height: "2.5rem" }}
          />
        </Link>

        {/* Search input */}
        <div
          style={{
            flexGrow: 1,
            margin: "0 1rem",
            position: "relative",
            maxWidth: "32rem",
          }}
        >
          <input
            type="text"
            placeholder="Search for products"
            style={{
              width: "100%",
              padding: "0.5rem 1rem 0.5rem 2.5rem",
              borderRadius: "9999px",
              backgroundColor: "#f3f4f6",
              border: "1px solid #d1d5db",
            }}
          />
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

        {/* Right side icons */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {/* Link to Bills */}
          <Link to="/bills" style={{ fontWeight: "500", color: "#4b5563" }}>
            Hóa đơn
          </Link>

          {/* Cart icon */}
          <div style={{ position: "relative" }}>
            <Link to="/cart" style={{ display: "inline-block", position: "relative" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ height: "1.5rem", width: "1.5rem", color: "#4b5563" }}
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

              {/* Badge hiển thị số lượng */}
              {totalQuantity > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-0.5rem",
                    right: "-0.5rem",
                    backgroundColor: "#ef4444",
                    color: "#fff",
                    borderRadius: "9999px",
                    padding: "0.25rem 0.5rem",
                    fontSize: "0.75rem",
                    fontWeight: "bold",
                  }}
                >
                  {totalQuantity}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export { MainNavigation };
