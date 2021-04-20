import React, { useState } from "react";

import Step1 from "./Step1";
import Step2 from "./Step2";
import StepResult from "./StepResult";

const numberOfSteps = 2; // increase this number if you would like to add more steps
const STATUS = {
  IDLE: "IDLE",
  SUBMITTED: "SUBMITTED",
  SUBMITTING: "SUBMITTING",
  COMPLETED: "COMPLETED",
};

const MultiSteps = () => {
  const [state, setState] = useState({
    currentStep: 1,
    name: "",
    role: "", // not required
    email: "",
    password: "",
    receiveUpdate: true,
    receiveCommunication: false,
  });
  const [status, setStatus] = useState(STATUS.IDLE);

  const getErrors = (formData) => {
    const result = {};
    if (!formData.name) result.name = "Name is required";
    if (!formData.email) result.email = "Email is required";
    if (!formData.password) result.password = "Password is required";
    return result;
  };

  const errors = getErrors(state);
  const isValid = Object.keys(errors).length === 0;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleChangeCheckbox = (event) => {
    const { name, checked } = event.currentTarget;
    setState({
      ...state,
      [name]: checked,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    next(); // to go to results step and show user all good.
    console.log(JSON.stringify(state, null, 2));
  };

  const next = () => {
    setStatus(STATUS.SUBMITTING);
    if (isValid) {
      setState({
        ...state,
        currentStep: state.currentStep + 1,
      });
      setStatus(STATUS.COMPLETED);
    } else {
      setStatus(STATUS.SUBMITTED);
    }
  };

  return (
    <React.Fragment>
      <p>Step {state.currentStep} </p>
      {!isValid && status === STATUS.SUBMITTED && (
        <div role="alert" className="alert alert-danger">
          <p>Please fix the following errors:</p>
          <ul>
            {Object.keys(errors).map((key) => {
              return <li key={key}>{errors[key]}</li>;
            })}
          </ul>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        {state.currentStep === 1 && (
          <Step1
            handleChange={handleChange}
            name={state.name}
            email={state.email}
            password={state.password}
            role={state.role}
          />
        )}
        {state.currentStep === 2 && (
          <Step2
            handleChange={handleChangeCheckbox}
            receiveUpdate={state.receiveUpdate}
            receiveCommunication={state.receiveCommunication}
          />
        )}
        {state.currentStep === numberOfSteps + 1 && <StepResult />}

        {state.currentStep < numberOfSteps ? (
          <button
            className="btn btn-primary float-right"
            id="next"
            type="button"
            onClick={next}
            disabled={!isValid && status === STATUS.SUBMITTED}
          >
            Submit
          </button>
        ) : state.currentStep === numberOfSteps ? (
          <input
            type="submit"
            className="btn btn-primary float-right"
            value="Submit"
            disabled={!isValid && status === STATUS.SUBMITTED}
          />
        ) : null}
      </form>
    </React.Fragment>
  );
};

export default MultiSteps;
