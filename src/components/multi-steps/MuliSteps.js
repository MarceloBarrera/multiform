import React, { useState } from "react";

import Step1 from "./Step1";
import Step2 from "./Step2";
import StepResult from "./StepResult";

const numberOfSteps = 2;
const MultiSteps = () => {
  const [state, setState] = useState({
    currentStep: 1,
    name: "",
    role: "",
    email: "",
    password: "",
    receiveUpdate: true,
    receiveCommunication: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
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
    next();
    console.log(JSON.stringify(state, null, 2));
  };

  const next = () => {
    setState({
      ...state,
      currentStep: state.currentStep + 1,
    });
  };

  return (
    <React.Fragment>
      <p>Step {state.currentStep} </p>

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
            type="button"
            onClick={next}
          >
            Submit
          </button>
        ) : state.currentStep === numberOfSteps ? (
          <input
            type="submit"
            className="btn btn-primary float-right"
            value="Submit"
            disabled={false}
          />
        ) : null}
      </form>
    </React.Fragment>
  );
};

export default MultiSteps;
