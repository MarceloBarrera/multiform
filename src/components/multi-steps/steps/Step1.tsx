import React from "react";

const Step1 = ({
  name,
  role,
  handleChange,
  email,
  password,
}: {
  name: string;
  role: string;
  handleChange: (event: any) => void;
  email: string;
  password: string;
}) => {
  return (
    <div className="form-group">
      <label htmlFor="name">Name (*)</label>
      <input
        className="form-control"
        id="name"
        name="name"
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={handleChange}
      />
      <label htmlFor="role">Role</label>
      <input
        className="form-control"
        id="role"
        name="role"
        type="text"
        placeholder="Enter role"
        value={role}
        onChange={handleChange}
      />
      <label htmlFor="email">Email (*)</label>
      <input
        className="form-control"
        id="email"
        name="email"
        type="text"
        placeholder="Enter email"
        value={email}
        onChange={handleChange}
      />
      <label htmlFor="password">Password (*)</label>
      <input
        className="form-control"
        id="password"
        name="password"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={handleChange}
      />
    </div>
  );
};

export default Step1;
