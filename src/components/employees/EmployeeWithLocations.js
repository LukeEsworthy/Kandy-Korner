import React, { useState, useEffect } from "react";
import EmployeeManager from "../../modules/EmployeeManager";
import LocationCard from "../locations/LocationCard";
import "./EmployeeDetail.css";

const EmployeeWithLocations = (props) => {
  const [employee, setEmployee] = useState({ location: {} });
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    EmployeeManager.getWithLocations(props.match.params.employeeId).then(
      (APIResult) => {
        console.log(APIResult);
        setEmployee(APIResult);
        // setLocations(APIResult.locations);
      }
    );
  }, []);

  return (
    <div className="card">
      <p>
        Employee: {employee.firstName} {employee.lastName}
      </p>
      <p>Employee address: {employee.address}</p>
      <p>Employee phone number: {employee.phone}</p>
      <p>Works at: {employee.location.name}</p>
    </div>
  );
};

export default EmployeeWithLocations;
