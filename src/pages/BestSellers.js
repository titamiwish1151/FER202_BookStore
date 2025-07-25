import React from "react";

function BestSellers() {
  const books = [
    { title: "The Psychology of Money", author: "Morgan Housel" },
    { title: "Atomic Habits", author: "James Clear" },
    { title: "The Subtle Art of Not Giving a Fuck", author: "Mark Manson" }
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Best Sellers</h1>
      <ul className="mt-4 list-disc list-inside">
        {books.map((book, index) => (
          <li key={index}>
            <strong>{book.title}</strong> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BestSellers;
