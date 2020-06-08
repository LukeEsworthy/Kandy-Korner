import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import ProductCard from "./product/ProductCard";
//only include these once they are built - previous practice exercise
import LocationCard from "./location/LocationCard";
import EmployeeCard from "./employee/EmployeeCard";

const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={(props) => {
          return <Home />;
        }}
      />
      <Route
        path="/products"
        render={(props) => {
          return <ProductCard />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;
