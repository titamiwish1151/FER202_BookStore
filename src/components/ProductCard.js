import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const productCardStyle = {
  border: "1px solid #ddd",
  padding: "16px",
  borderRadius: "8px",
  maxWidth: "250px",
  margin: "10px",
  boxSizing: "border-box",
};

const imageStyle = {
  width: "100%",
  height: "160px",
  objectFit: "cover",
  borderRadius: "4px",
};

const titleStyle = {
  fontSize: "18px",
  fontWeight: "600",
  marginTop: "12px",
};

const priceStyle = {
  color: "#555",
  marginTop: "8px",
  fontSize: "16px",
};

const buttonStyle = {
  marginTop: "12px",
  backgroundColor: "#007bff",
  color: "#fff",
  padding: "8px 16px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const buttonHoverStyle = {
  backgroundColor: "#0056b3",
};

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  // For simplicity, no hover effect here. You can add it via CSS or use state.
  return (
    <div style={productCardStyle}>
      <img src={product.image} alt={product.name} style={imageStyle} />
      <h3 style={titleStyle}>{product.name}</h3>
      <p style={priceStyle}>${product.price.toFixed(2)}</p>
      <button
        style={buttonStyle}
        onClick={() => dispatch(addToCart(product))}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
