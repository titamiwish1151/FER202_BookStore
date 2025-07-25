import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";
import { useBill } from "../context/BillContext";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items || []);
  const dispatch = useDispatch();
  const { addBill } = useBill();
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleRemove = (name) => {
    dispatch(removeFromCart({ name }));
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    const bill = {
      items: cartItems,
      total,
    };

    addBill(bill); // lưu vào context
    alert("Thanh toán thành công!");

    navigate("/bills"); // chuyển hướng sang trang danh sách bill
  };

  // Styles thay thế Tailwind
  const containerStyle = {
    maxWidth: "768px", // max-w-3xl ~ 48rem = 768px
    margin: "2rem auto 0 auto",
    padding: "1rem",
    backgroundColor: "white",
    borderRadius: "0.375rem", // rounded ~ 6px
    boxShadow:
      "0 1px 2px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.1)", // shadow-sm equivalent
  };

  const titleStyle = {
    fontSize: "1.5rem", // text-2xl ~ 24px
    fontWeight: "700",
    marginBottom: "1rem",
  };

  const listStyle = {
    listStyleType: "none",
    padding: 0,
    margin: 0,
    marginBottom: "1rem",
  };

  const listItemStyle = {
    borderBottom: "1px solid #e5e7eb", // border-b ~ gray-200
    paddingBottom: "0.5rem",
    marginBottom: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const productInfoStyle = {
    lineHeight: 1.4,
  };

  const productNameStyle = {
    fontWeight: "600",
  };

  const productPriceStyle = {
    color: "#4b5563", // gray-600
  };

  const removeBtnStyle = {
    color: "#ef4444", // red-500
    background: "none",
    border: "none",
    cursor: "pointer",
    textDecoration: "underline",
    fontSize: "1rem",
  };

  const totalStyle = {
    textAlign: "right",
    fontWeight: "700",
    fontSize: "1.25rem", // text-xl ~ 20px
    marginTop: "1rem",
  };

  const checkoutBtnStyle = {
    marginTop: "1rem",
    padding: "0.5rem 1.5rem",
    backgroundColor: "#22c55e", // green-500
    color: "white",
    border: "none",
    borderRadius: "0.375rem", // rounded
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "1rem",
  };

  const checkoutBtnHoverStyle = {
    backgroundColor: "#16a34a", // green-600
  };

  // State for hover effect on checkout button
  const [hover, setHover] = React.useState(false);

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <ul style={listStyle}>
            {cartItems.map((item, index) => (
              <li key={index} style={listItemStyle}>
                <div style={productInfoStyle}>
                  <span style={productNameStyle}>{item.name}</span> × {item.quantity}
                  <br />
                  <span style={productPriceStyle}>${item.price}</span>
                </div>
                <button
                  style={removeBtnStyle}
                  onClick={() => handleRemove(item.name)}
                  aria-label={`Remove ${item.name} from cart`}
                >
                  Xóa
                </button>
              </li>
            ))}
          </ul>
          <div style={totalStyle}>Tổng tiền: ${total.toFixed(2)}</div>
          <button
            style={hover ? { ...checkoutBtnStyle, ...checkoutBtnHoverStyle } : checkoutBtnStyle}
            onClick={handleCheckout}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Thanh toán
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;
