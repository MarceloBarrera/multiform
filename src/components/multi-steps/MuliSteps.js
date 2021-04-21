import React, { useReducer } from "react";
import PropTypes from "prop-types";

import Step1 from "./Step1";
import Step2 from "./Step2";
import StepResult from "./StepResult";
import {
  multiStepsReducer,
  initialState,
  STATUS,
  actionTypes,
} from "./MultiStepsReducer";

const numberOfSteps = 2; // increase this number when adding more components steps
const MultiSteps = (props) => {
  const [state, dispatch] = useReducer(multiStepsReducer, {
    ...initialState,
    ...props,
  });

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
    dispatch({ type: actionTypes.SET_FORM_INPUT, payload: { name, value } });
  };

  const handleChangeCheckbox = (event) => {
    const { name, checked } = event.currentTarget;
    dispatch({
      type: actionTypes.SET_FORM_CHECKBOX,
      payload: { name, checked },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    next(); // to go to results step and show user all good.
    console.log(JSON.stringify(state, null, 2));
  };

  const next = () => {
    dispatch({ type: actionTypes.SET_STATUS, payload: STATUS.SUBMITTING });
    if (isValid) {
      dispatch({
        type: actionTypes.SET_CURRENT_STEP,
        payload: state.currentStep + 1,
      });
      dispatch({ type: actionTypes.SET_STATUS, payload: STATUS.COMPLETED });
    } else {
      dispatch({ type: actionTypes.SET_STATUS, payload: STATUS.SUBMITTED });
    }
  };

  return (
    <React.Fragment>
      <p>Step {state.currentStep} </p>
      {!isValid && state.status === STATUS.SUBMITTED && (
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
            disabled={!isValid && state.status === STATUS.SUBMITTED}
          >
            Submit
          </button>
        ) : state.currentStep === numberOfSteps ? (
          <input
            data-test-submit
            type="submit"
            className="btn btn-primary float-right"
            value="Submit"
            disabled={!isValid && state.status === STATUS.SUBMITTED}
          />
        ) : null}
      </form>
    </React.Fragment>
  );
};
MultiSteps.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default MultiSteps;
