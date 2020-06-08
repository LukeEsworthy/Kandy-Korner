import React from "react";
import ProductCard from "./products/ProductCard";
import LocationCard from "./locations/LocationCard";
import EmployeeCard from "./employees/EmployeeCard";
import "./KandyKorner.css";

function App() {
  return (
    <div>
      <div>
        <h1>Houchens' Kandy Kounter</h1>
      </div>
      <div>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div>
        <LocationCard />
        <LocationCard />
        <LocationCard />
      </div>
      <div>
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
      </div>
    </div>
  );
}

export default App;
