import React from "react";

function NewBooks() {
  const newBooks = [
    "Design Your Future - Lisa Broderick",
    "Creative Confidence - Tom Kelley",
    "The Comfort Book - Matt Haig"
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">New Books</h1>
      <ul className="mt-4 list-disc list-inside">
        {newBooks.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
    </div>
  );
}

export default NewBooks;