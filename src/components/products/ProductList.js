import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import ProductManager from "../../modules/ProductManager";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    return ProductManager.getAll().then((productsFromAPI) => {
      setProducts(productsFromAPI);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container-cards">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
export default ProductList;
