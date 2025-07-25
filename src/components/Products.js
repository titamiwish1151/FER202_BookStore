import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const products = [
  {
    id: 1,
    name: "Đắc Nhân Tâm",
    price: 7,
    image: "/images/1.jpg"
  },
  {
    id: 2,
    name: "Thuật Thao Túng",
    price: 6,
    image: "/images/2.jpg"
  },
  {
    id: 3,
    name: "Thỏ Bảy Màu",
    price: 5,
    image: "/images/3.jpg"
  },
  {
    id: 4,
    name: "Conan",
    price: 10,
    image: "/images/4.jpg"
  },
  {
    id: 5,
    name: "Doraemon",
    price: 12,
    image: "h/images/5.jpg"
  }
];

const cardStyle = {
  width: "220px",
  height: "360px",
  margin: "10px",
  padding: "16px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  backgroundColor: "#fff",
};

const imageStyle = {
  width: "100%",
  height: "160px",
  objectFit: "contain",
};

const contentWrapperStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "auto",
};

const nameStyle = {
  fontWeight: "bold",
  fontSize: "16px",
  marginTop: "12px",
  marginBottom: "6px",
  textAlign: "center",
};

const priceStyle = {
  color: "#444",
  fontSize: "14px",
  marginBottom: "10px",
};

const buttonStyle = {
  backgroundColor: "#2563eb",
  color: "#fff",
  border: "none",
  padding: "8px 16px",
  borderRadius: "20px",
  fontWeight: "bold",
  cursor: "pointer",
};

function Products() {
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "20px" }}>
        Our Top Picks
      </h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {products.map((product) => (
          <div key={product.id} style={cardStyle}>
            <img src={product.image} alt={product.name} style={imageStyle} />
            <div style={contentWrapperStyle}>
              <div style={nameStyle}>{product.name}</div>
              <div style={priceStyle}>${product.price.toFixed(2)}</div>
              <button
                onClick={() => dispatch(addToCart(product))}
                style={buttonStyle}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
