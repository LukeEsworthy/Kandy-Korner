import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import ProductCard from "./products/ProductCard";
import LocationCard from "./locations/LocationCard";
import EmployeeCard from "./employees/EmployeeCard";

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
      <Route
        path="/locations"
        render={(props) => {
          return <LocationCard />;
        }}
      />
      <Route
        path="/employees"
        render={(props) => {
          return <EmployeeCard />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;
