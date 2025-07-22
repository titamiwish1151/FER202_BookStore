import React from "react";

const ClientPage = () => {
  const containerStyle = {
    fontFamily: "sans-serif",
    padding: "20px",
    backgroundColor: "#f5f5f5",
  };

  const bannerStyle = {
    width: "100%",
    height: "300px",
    backgroundImage: 'url("https://www.ikea.pr/images/homepage-hero-pr.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "10px",
    marginBottom: "30px",
  };

  const categoryContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginBottom: "30px",
  };

  const categoryItemStyle = {
    flex: "1 1 150px",
    backgroundColor: "white",
    padding: "15px",
    margin: "10px",
    textAlign: "center",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    cursor: "pointer",
  };

  const productGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "20px",
  };

  const productCardStyle = {
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "15px",
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  };

  const promoBannerStyle = {
    marginTop: "40px",
    backgroundImage: 'url("https://www.ikea.pr/images/promo-banner.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "200px",
    borderRadius: "10px",
  };

  const categories = ["Home", "Storage", "Outdoor", "Beds", "Chairs", "Tables"];
  const products = [
    {
      id: 1,
      name: "Poäng Chair",
      price: "$89",
      image:
        "https://www.ikea.com/us/en/images/products/poaeng-armchair__0710572_pe727378_s5.jpg",
    },
    {
      id: 2,
      name: "Malm Bed",
      price: "$199",
      image:
        "https://www.ikea.com/us/en/images/products/malm-bed-frame__0710542_pe727285_s5.jpg",
    },
    {
      id: 3,
      name: "Billy Bookcase",
      price: "$69",
      image:
        "https://www.ikea.com/us/en/images/products/billy-bookcase__0625599_pe692385_s5.jpg",
    },
    {
      id: 4,
      name: "Lack Table",
      price: "$19.99",
      image:
        "https://www.ikea.com/us/en/images/products/lack-coffee-table__0104207_pe250678_s5.jpg",
    },
  ];

  return (
    <div style={containerStyle}>
      <div style={bannerStyle}></div>

      <div style={categoryContainerStyle}>
        {categories.map((cat) => (
          <div key={cat} style={categoryItemStyle}>
            {cat}
          </div>
        ))}
      </div>

      <div style={productGridStyle}>
        {products.map((product) => (
          <div key={product.id} style={productCardStyle}>
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                borderRadius: "6px",
                marginBottom: "10px",
              }}
            />
            <h3 style={{ margin: "10px 0" }}>{product.name}</h3>
            <p style={{ color: "#007E00", fontWeight: "bold" }}>
              {product.price}
            </p>
          </div>
        ))}
      </div>

      <div style={promoBannerStyle}></div>
    </div>
  );
};

export default ClientPage;
