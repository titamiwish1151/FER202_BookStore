import React from "react";

function Favorites() {
  const favorites = ["IKEA Desk - Modern Oak", "Reading Lamp - LED Flex", "Comfort Chair - Gray"];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Favorites</h1>
      <ul className="mt-4 list-disc list-inside">
        {favorites.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Favorites;