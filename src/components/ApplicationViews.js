import { Route, Redirect } from "react-router-dom";
import React from "react";
import Login from "./auth/Login";
import Home from "./home/Home";
import ProductList from "./products/ProductList";
import ProductDetail from "./products/ProductDetail";
import ProductForm from "./products/ProductForm";
import ProductEditForm from "./products/ProductEditForm";
import LocationList from "./locations/LocationList";
import EmployeeList from "./employees/EmployeeList";
import EmployeeDetail from "./employees/EmployeeDetail";
import EmployeeForm from "./employees/EmployeeForm";

const ApplicationViews = () => {
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  return (
    <React.Fragment>
      <Route path="/login" component={Login} />
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
          if (isAuthenticated()) {
            return <ProductList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/products/:productId(\d+)"
        render={(props) => {
          if (isAuthenticated()) {
            return (
              <ProductDetail
                productId={parseInt(props.match.params.productId)}
              />
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/products/new"
        render={(props) => {
          if (isAuthenticated()) {
            return <ProductForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/products/:productId(\d+)/edit"
        render={(props) => {
          if (isAuthenticated()) {
            return <ProductEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/locations"
        render={(props) => {
          if (isAuthenticated()) {
            return <LocationList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/employees"
        render={(props) => {
          if (isAuthenticated()) {
            return <EmployeeList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/employees/:employeeId(\d+)"
        render={(props) => {
          if (isAuthenticated()) {
            return (
              <EmployeeDetail
                employeeId={parseInt(props.match.params.employeeId)}
              />
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/employees/new"
        render={(props) => {
          if (isAuthenticated()) {
            return <EmployeeForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;
