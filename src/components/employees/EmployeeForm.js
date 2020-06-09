import React, { useState } from "react";
import EmployeeManager from "../../modules/EmployeeManager";
import "./EmployeeForm.css";

const EmployeeForm = (props) => {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...employee };
    stateToChange[evt.target.id] = evt.target.value;
    setEmployee(stateToChange);
  };

  const constructNewEmployee = (evt) => {
    evt.preventDefault();
    if (
      employee.firstName === "" ||
      employee.lastName === "" ||
      employee.address === "" ||
      employee.phone === ""
    ) {
      window.alert("Please input all employee information");
    } else {
      setIsLoading(true);
      EmployeeManager.post(employee).then(() =>
        props.history.push("/employees")
      );
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="firstName"
              placeholder="Employee first name"
            />
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="lastName"
              placeholder="Employee last name"
            />
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="address"
              placeholder="Address"
            />
            <label htmlFor="address">Address</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="phone"
              placeholder="Employee phone number"
            />
            <label htmlFor="phone">Phone number</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewEmployee}
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default EmployeeForm;
