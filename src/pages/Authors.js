import React from "react";

function Authors() {
  const authors = ["J.K. Rowling", "Paulo Coelho", "George R.R. Martin", "Michelle Obama"];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Authors</h1>
      <ul className="mt-4 list-disc list-inside">
        {authors.map((author, index) => (
          <li key={index}>{author}</li>
        ))}
      </ul>
    </div>
  );
}

export default Authors;