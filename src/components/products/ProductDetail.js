import React, { useState, useEffect } from "react";
import ProductManager from "../../modules/ProductManager";
import "./ProductDetail.css";

const ProductDetail = (props) => {
  const [product, setProduct] = useState({ name: "", price: "" });

  useEffect(() => {
    ProductManager.get(props.productId).then((product) => {
      setProduct({
        name: product.name,
        price: product.price,
      });
    });
  }, [props.productId]);

  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: <span style={{ color: "darkslategrey" }}>{product.name}</span>
        </h3>
        <p>Price: {product.price}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
