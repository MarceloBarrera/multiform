import React, { useReducer } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import Step1 from "./Step1";
import Step2 from "./Step2";
import StepResult from "./StepResult";
import {
  multiStepsReducer,
  initialState,
  STATUS,
  ActionTypes,
  IState,
  Steps,
} from "./MultiStepsReducer";
import { isValidEmail, validatePassword } from "../../utils/utils";

interface MultiStepsProps {
  name: string;
  email: string;
  password: string;
  role: string;
  receiveUpdate: boolean;
  receiveCommunication: boolean;
}
type FormDataErrors = {
  name: string;
  email: string;
  password: string;
};
const numberOfSteps = 2; // increase this number when adding more components steps
const MultiSteps = (props: MultiStepsProps) => {
  const [state, dispatch] = useReducer(multiStepsReducer, {
    ...initialState,
    ...props,
  });

  const getErrors = (formData: IState) => {
    if (formData == null) return;
    let result: FormDataErrors = { name: null, email: null, password: null };
    if (!formData.name) result.name = "Name is required";
    if (!formData.email) result.email = "Email is required";
    if (formData.email && isValidEmail(formData.email) === false) {
      result.email = "Email is not valid";
    }
    if (!formData.password) result.password = "Password is required";
    if (formData.password) {
      const passwordValidation = validatePassword(formData.password);
      if (passwordValidation !== "") {
        result.password = passwordValidation;
      }
    }
    return result;
  };

  const errors = getErrors(state);
  const isValid =
    errors.email == null && errors.name == null && errors.password == null;

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    dispatch({ type: ActionTypes.SET_FORM_INPUT, payload: { name, value } });
  };

  const handleChangeCheckbox = (event: any) => {
    const { name, checked } = event.currentTarget;
    dispatch({
      type: ActionTypes.SET_FORM_CHECKBOX,
      payload: { name, checked },
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    next(); // to go to results step and show user all good.
    console.log(JSON.stringify(state, null, 2));
  };

  const next = () => {
    dispatch({ type: ActionTypes.SET_STATUS, payload: STATUS.SUBMITTING });
    if (isValid) {
      dispatch({
        type: ActionTypes.SET_CURRENT_STEP,
        payload: state.currentStep + 1,
      });
      dispatch({ type: ActionTypes.SET_STATUS, payload: STATUS.COMPLETED });
    } else {
      dispatch({ type: ActionTypes.SET_STATUS, payload: STATUS.SUBMITTED });
    }
  };

  const renderTabs = () => {
    return (
      <ul className="nav nav-tabs">
        {Steps.map((step) => {
          return (
            <li key={step.name} className="nav-item">
              <a
                className={cn("nav-link", {
                  active: step.name == state.currentStep,
                  disabled: step.position != state.currentStep,
                })}
                href="#"
              >
                {step.name}
              </a>
            </li>
          );
        })}
      </ul>
    );
  };

  const renderAlert = () => {
    return (
      <div role="alert" className="alert alert-danger">
        <p>Please fix the following errors:</p>
        <ul>
          {Object.values(errors)
            .filter((e) => e != null)
            .map((error: string) => {
              return <li key={error}>{error}</li>;
            })}
        </ul>
      </div>
    );
  };

  return (
    <React.Fragment>
      {renderTabs()}

      {!isValid && state.status === STATUS.SUBMITTED && renderAlert()}

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
        {state.currentStep === numberOfSteps + 1 && (
          <StepResult title="done foo" />
        )}

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
