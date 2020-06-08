import React from "react";

const EmployeeCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: <span className="card-employeename">Sage Houchens</span>
        </h3>
        <p>Address: 404 Lost Way, Nashville, TN</p>
        <p>Phone: 657-2355</p>
        <p>Location: </p>
      </div>
    </div>
  );
};

export default EmployeeCard;
