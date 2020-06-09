import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import ProductManager from "../../modules/ProductManager";

const ProductList = (props) => {
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
    <>
      <section className="section-content">
        <button
          type="button"
          className="btn"
          onClick={() => {
            props.history.push("/products/new");
          }}
        >
          Add Product
        </button>
      </section>
      <div className="container-cards">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
export default ProductList;
