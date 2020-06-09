import React from "react";
import { Link } from "react-router-dom";

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
      <Link to={`/employees/${props.employee.id}`}>
        <button>Details</button>
      </Link>
    </div>
  );
};

export default EmployeeCard;
