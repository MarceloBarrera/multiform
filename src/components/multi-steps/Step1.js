import React from "react";
import PropTypes from "prop-types";

const Step1 = (props) => {
  return (
    <div className="form-group">
      <label htmlFor="name">Name</label>
      <input
        className="form-control"
        id="name"
        name="name"
        type="text"
        placeholder="Enter name"
        value={props.name}
        onChange={props.handleChange}
      />
      <label htmlFor="role">Role</label>
      <input
        className="form-control"
        id="role"
        name="role"
        type="text"
        placeholder="Enter role"
        value={props.role}
        onChange={props.handleChange}
      />
      <label htmlFor="email">Email</label>
      <input
        className="form-control"
        id="email"
        name="email"
        type="text"
        placeholder="Enter email"
        value={props.email}
        onChange={props.handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        className="form-control"
        id="password"
        name="password"
        type="password"
        placeholder="Enter password"
        value={props.password}
        onChange={props.handleChange}
      />
    </div>
  );
};

Step1.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Step1;
