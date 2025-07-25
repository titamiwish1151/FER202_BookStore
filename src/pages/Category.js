import React from "react";

function Category() {
  const categories = ["Fiction", "Non-Fiction", "Children", "Self-Help", "Business"];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Categories</h1>
      <ul className="mt-4 list-disc list-inside">
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
