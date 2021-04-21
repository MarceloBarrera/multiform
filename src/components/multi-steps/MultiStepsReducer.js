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

export const actionTypes = {
  SET_CURRENT_STEP: "SET_CURRENT_STEP",
  SET_STATUS: "SET_STATUS",
  SET_FORM_INPUT: "SET_FORM_INPUT",
  SET_FORM_CHECKBOX: "SET_FORM_CHECKBOX",
};

export const multiStepsReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_STEP:
      return { ...state, currentStep: action.payload };
    case actionTypes.SET_STATUS:
      return { ...state, status: action.payload };
    case actionTypes.SET_FORM_INPUT:
      return { ...state, [action.payload.name]: action.payload.value };
    case actionTypes.SET_FORM_CHECKBOX:
      return { ...state, [action.payload.name]: action.payload.checked };
    default:
      return state;
  }
};
