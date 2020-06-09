import React, { useState, useEffect } from "react";
import EmployeeManager from "../../modules/EmployeeManager";
import "./EmployeeDetail.css";

const EmployeeDetail = (props) => {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
  });

  useEffect(() => {
    EmployeeManager.get(props.employeeId).then((employee) => {
      setEmployee({
        firstName: employee.firstName,
        lastName: employee.lastName,
        address: employee.address,
        phone: employee.phone,
      });
    });
  }, [props.employeeId]);

  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name:{" "}
          <span style={{ color: "darkslategrey" }}>
            {employee.firstName} {employee.lastName}
          </span>
        </h3>
        <p>Address: {employee.address}</p>
        <p>Phone: {employee.phone}</p>
      </div>
    </div>
  );
};

export default EmployeeDetail;
