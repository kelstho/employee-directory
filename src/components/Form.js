import React from "react";

function Form(props) {
  return (
    <div className="container">
      <h3>Sort By:</h3>
      <form>
        <div className="form-check form-check-inline">
          <label className="form-check-label" htmlFor="lastNameSort">Last Name:</label>
          <input
            className="ml-2"
            onChange={props.handleInputChange}
            type="radio"
            name="sortBy"
            id="lastNameSort"
            checked={(props.sortBy === "lastNameSort") ? "checked" : false}
          />
        </div>
        <div className="form-check form-check-inline">
          <label className="form-check-label" htmlFor="firstNameSort">First Name:</label>
          <input
            className="ml-2"
            onChange={props.handleInputChange}
            type="radio"
            name="sortBy"
            id="firstNameSort"
            checked={(props.sortBy === "firstNameSort") ? "checked" : false}
          />
        </div>
      </form>
    </div>
  );
}

export default Form;