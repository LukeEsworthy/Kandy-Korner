import React from "react";
import { Link } from "react-router-dom";
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
      <Link to={`/products/${props.product.id}`}>
        <button>Details</button>
      </Link>
    </div>
  );
};

export default ProductCard;
