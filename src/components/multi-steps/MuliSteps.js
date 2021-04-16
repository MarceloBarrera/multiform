import React from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import StepResult from "./StepResult";

class MultiSteps extends React.Component {
  state = {
    currentStep: 1,
    name: "",
    role: "",
    email: "",
    password: "",
    receiveUpdate: true,
    receiveCommunication: false,
  };

  numberOfSteps = 2;

  handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({
      [name]: value,
    });
  };

  handleChangeCheckbox = (event) => {
    const { name, checked } = event.currentTarget;
    this.setState({
      [name]: checked,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.next();
    console.log(JSON.stringify(this.state, null, 2));
  };

  next = () => {
    const { currentStep } = this.state;
    this.setState({
      currentStep: currentStep + 1,
    });
  };

  render() {
    const { currentStep } = this.state;
    return (
      <React.Fragment>
        <p>Step {this.state.currentStep} </p>

        <form onSubmit={this.handleSubmit}>
          {currentStep === 1 && (
            <Step1
              handleChange={this.handleChange}
              name={this.state.name}
              email={this.state.email}
              password={this.state.password}
              role={this.state.role}
            />
          )}
          {currentStep === 2 && (
            <Step2
              handleChange={this.handleChangeCheckbox}
              receiveUpdate={this.state.receiveUpdate}
              receiveCommunication={this.state.receiveCommunication}
            />
          )}
          {currentStep === this.numberOfSteps + 1 && <StepResult />}

          {currentStep < this.numberOfSteps ? (
            <button
              className="btn btn-primary float-right"
              type="button"
              onClick={this.next}
            >
              Submit
            </button>
          ) : currentStep === this.numberOfSteps ? (
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
  }
}

export default MultiSteps;
