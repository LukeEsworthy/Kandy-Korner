import React, { useState } from "react";
import ProductManager from "../../modules/ProductManager";
import "./ProductForm.css";

const ProductForm = (props) => {
  const [product, setProduct] = useState({ name: "", price: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...product };
    stateToChange[evt.target.id] = evt.target.value;
    setProduct(stateToChange);
  };

  const constructNewProduct = (evt) => {
    evt.preventDefault();
    if (product.name === "" || product.price === "") {
      window.alert("Please input a product name and price");
    } else {
      setIsLoading(true);
      ProductManager.post(product).then(() => props.history.push("/products"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="Product name"
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="price"
              placeholder="Price"
            />
            <label htmlFor="price">Price</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewProduct}
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default ProductForm;
