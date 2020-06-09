import React from "react";
import "./Product.css";

const ProductCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: <span className="card-productname">{props.product.name}</span>
        </h3>
        <p>Price: ${props.product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
