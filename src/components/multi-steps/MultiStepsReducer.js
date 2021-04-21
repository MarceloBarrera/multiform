export const STATUS = {
  IDLE: "IDLE",
  SUBMITTED: "SUBMITTED",
  SUBMITTING: "SUBMITTING",
  COMPLETED: "COMPLETED",
};

export const initialState = {
  currentStep: 1,
  status: STATUS.IDLE,
  name: "",
  email: "",
  password: "",
  role: "",
  receiveUpdate: true,
  receiveCommunication: false,
};

export const multiStepsReducer = (state, action) => {
  switch (action.type) {
    case "SET_CURRENT_STEP":
      return { ...state, currentStep: action.payload };
    case "SET_STATUS":
      return { ...state, status: action.payload };
    case "SET_FORM_INPUT":
      return { ...state, [action.payload.name]: action.payload.value };
    case "SET_FORM_CHECKBOX":
      return { ...state, [action.payload.name]: action.payload.checked };
    default:
      throw new Error("Unhandled action " + action.type);
  }
};
