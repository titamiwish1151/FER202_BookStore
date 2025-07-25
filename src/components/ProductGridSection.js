import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const sampleProducts = [
  { id: 1, name: "Đắc Nhân Tâm", price: 7, image: "/images/1.jpg" },
  { id: 2, name: "Thuật Thao Túng", price: 6, image: "/images/2.jpg" },
  { id: 3, name: "Thỏ Bảy Màu", price: 5, image: "/images/3.jpg" },
  { id: 4, name: "Conan", price: 10, image: "/images/4.jpg" },
  { id: 5, name: "Doraemon", price: 12, image: "/images/5.jpg" },
];

const containerStyle = {
  padding: "32px",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: "24px",
};

const cardStyle = {
  border: "1px solid #ddd",
  padding: "16px",
  borderRadius: "8px",
  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  boxSizing: "border-box",
  textAlign: "center",
};

const imageStyle = {
  width: "100%",
  height: "160px",
  objectFit: "cover",
  marginBottom: "12px",
  borderRadius: "4px",
};

const buttonStyle = {
  marginTop: "12px",
  backgroundColor: "#2563eb",
  color: "#fff",
  padding: "8px 16px",
  border: "none",
  borderRadius: "20px",
  cursor: "pointer",
  fontWeight: "600",
  transition: "background-color 0.3s ease",
};

const buttonHoverStyle = {
  backgroundColor: "#1e40af",
};

const ProductGridSection = () => {
  const dispatch = useDispatch();

  return (
    <div style={containerStyle}>
      <h2 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "16px" }}>Our Top Picks</h2>
      <div style={gridStyle}>
        {sampleProducts.map((product) => (
          <div key={product.id} style={cardStyle}>
            <img src={product.image} alt={product.name} style={imageStyle} />
            <h3 style={{ fontWeight: "600", marginBottom: "8px" }}>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button
              onClick={() => dispatch(addToCart(product))}
              style={buttonStyle}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGridSection;
