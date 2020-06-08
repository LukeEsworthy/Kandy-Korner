import React from "react";

const ProductCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: <span className="card-productname">Jolly Developer</span>
        </h3>
        <p>Price: $65,000.00</p>
      </div>
    </div>
  );
};

export default ProductCard;
