import {
  multiStepsReducer,
  initialState,
  STATUS,
} from "../../../src/components/multi-steps/MultiStepsReducer";

it("should current step be updated", () => {
  const action = { type: "SET_CURRENT_STEP", payload: 2 };

  const newState = multiStepsReducer(initialState, action);

  expect(newState.currentStep).toEqual(2);
});
it("should STATUS be updated", () => {
  const action = { type: "SET_STATUS", payload: STATUS.SUBMITTED };

  const newState = multiStepsReducer(initialState, action);

  expect(newState.status).toEqual(STATUS.SUBMITTED);
});
it("should throw exception when action does not exists", () => {
  const action = { type: "NON_EXISTING_ACTION", payload: "foo" };

  try {
    multiStepsReducer(initialState, action);
  } catch (error) {
    expect(error.message).toEqual(`Unhandled action NON_EXISTING_ACTION`);
  }
});
it("should input be updated", () => {
  const action = {
    type: "SET_FORM_INPUT",
    payload: { name: "name", value: "foo" },
  };

  const newState = multiStepsReducer(initialState, action);

  expect(newState.name).toEqual("foo");
});
it("should checkbox be updated", () => {
  const action = {
    type: "SET_FORM_CHECKBOX",
    payload: { name: "receiveUpdate", checked: true },
  };

  const newState = multiStepsReducer(initialState, action);

  expect(newState.receiveUpdate).toEqual(true);
});
