import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import ProductList from "./products/ProductList";
import ProductDetail from "./products/ProductDetail";
import ProductForm from "./products/ProductForm";
import LocationList from "./locations/LocationList";
import EmployeeList from "./employees/EmployeeList";
import EmployeeDetail from "./employees/EmployeeDetail";

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
        exact
        path="/products"
        render={(props) => {
          return <ProductList {...props} />;
        }}
      />
      <Route
        path="/products/:productId(\d+)"
        render={(props) => {
          return (
            <ProductDetail productId={parseInt(props.match.params.productId)} />
          );
        }}
      />
      <Route
        path="/products/new"
        render={(props) => {
          return <ProductForm {...props} />;
        }}
      />
      <Route
        path="/locations"
        render={(props) => {
          return <LocationList />;
        }}
      />
      <Route
        exact
        path="/employees"
        render={(props) => {
          return <EmployeeList />;
        }}
      />
      <Route
        path="/employees/:employeeId(\d+)"
        render={(props) => {
          return (
            <EmployeeDetail
              employeeId={parseInt(props.match.params.employeeId)}
            />
          );
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;
