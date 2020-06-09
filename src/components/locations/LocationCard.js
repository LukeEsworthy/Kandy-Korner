import React from "react";
import "./Location.css";

const LocationCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: <span className="card-locationname">{props.location.name}</span>
        </h3>
        <p>Address: {props.location.address}</p>
        <p>Phone number: {props.location.phone}</p>
      </div>
    </div>
  );
};

export default LocationCard;
