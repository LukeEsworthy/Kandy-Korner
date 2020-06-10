import React, { useState, useEffect } from "react";
import ProductManager from "../../modules/ProductManager";
import "./ProductForm.css";

const ProductEditForm = (props) => {
  const [product, setProduct] = useState({ name: "", price: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...product };
    stateToChange[evt.target.id] = evt.target.value;
    setProduct(stateToChange);
  };

  const updateExistingProduct = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    const editedProduct = {
      id: props.match.params.productId,
      name: product.name,
      price: product.price,
    };

    ProductManager.update(editedProduct).then(() =>
      props.history.push("/products")
    );
  };

  useEffect(() => {
    ProductManager.get(props.match.params.productId).then((product) => {
      setProduct(product);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={product.name}
            />
            <label htmlFor="name">Product name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="price"
              value={product.price}
            />
            <label htmlFor="price">Price</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingProduct}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default ProductEditForm;
