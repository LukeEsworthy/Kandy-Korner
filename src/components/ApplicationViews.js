import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import ProductList from "./products/ProductList";
import LocationList from "./locations/LocationList";
import EmployeeList from "./employees/EmployeeList";

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
          return <ProductList />;
        }}
      />
      <Route
        path="/locations"
        render={(props) => {
          return <LocationList />;
        }}
      />
      <Route
        path="/employees"
        render={(props) => {
          return <EmployeeList />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;
