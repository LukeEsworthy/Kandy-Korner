import React from "react";

const EmployeeCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name:{" "}
          <span className="card-employeename">
            {props.employee.firstName} {props.employee.lastName}
          </span>
        </h3>
        <p>Address: {props.employee.address}</p>
        <p>Phone: {props.employee.phone}</p>
        <p>Location: </p>
      </div>
    </div>
  );
};

export default EmployeeCard;
