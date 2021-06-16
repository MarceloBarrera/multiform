
export const STATUS = {
  IDLE: "IDLE",
  SUBMITTED: "SUBMITTED",
  SUBMITTING: "SUBMITTING",
  COMPLETED: "COMPLETED",
};

interface Step {
  name:string;
  position: number
}

export const Steps: Array<Step> =[
  {name: "User", position: 1},
  {name: "Privacy", position: 2},
  {name: "Done", position: 3},
]

export interface IState {
  currentStep: number;
  status: string;
  name: string;
  email: string;
  password: string;
  role: string;
  receiveUpdate: boolean;
  receiveCommunication: boolean;
}

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


export enum Kind {
  SET_CURRENT_STEP,
  SET_STATUS,
  SET_FORM_INPUT,
  SET_FORM_CHECKBOX
}

export type Action = {
  kind : Kind.SET_CURRENT_STEP
  payload : any
}
| {
  kind : Kind.SET_STATUS
  payload : any
}
| {
  kind : Kind.SET_FORM_INPUT
  payload : any
}
| {
  kind : Kind.SET_FORM_CHECKBOX
  payload : any
}
| {
  kind : Kind.SET_CURRENT_STEP
  payload : number
}

export const multiStepsReducer = (state: IState, action: Action) => {
  switch (action.kind) {
    case Kind.SET_CURRENT_STEP:
      return { ...state, currentStep: action.payload };
    case Kind.SET_STATUS:
      return { ...state, status: action.payload };
    case Kind.SET_FORM_INPUT:
      return { ...state, [action.payload.name]: action.payload.value };
    case Kind.SET_FORM_CHECKBOX:
      return { ...state, [action.payload.name]: action.payload.checked };
    default:
      return state;
  }
};
