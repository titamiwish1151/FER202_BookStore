// src/components/BookCard.js
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const BookCard = ({ book }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(book));
  };

  return (
    <div className="border p-4">
      <h3>{book.title}</h3>
      <p>Price: ${book.price}</p>
      <button onClick={handleAddToCart} className="bg-blue-500 text-white px-4 py-2 mt-2">
        Add to Cart
      </button>
    </div>
  );
};

export default BookCard;
