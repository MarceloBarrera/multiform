import passwordValidator from "password-validator";

export const isValidEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const validatePassword = (password) => {
  const schema = new passwordValidator();
  schema.is().min(9).has().uppercase(1).has().lowercase(1).has().digits(1);
  schema.validate(password);
  const errors = schema.validate(password, { list: true });

  if (errors.includes("min")) {
    return "Password must have at least 9 characters";
  }
  if (errors.includes("uppercase")) {
    return "Password must have at least 1 uppercase";
  }
  if (errors.includes("lowercase")) {
    return "Password must have at least 1 lowercase";
  }
  if (errors.includes("digits")) {
    return "Password must have at least 1 number";
  }

  return "";
};
