import React from "react";
import { shallow } from "enzyme";
import Step1 from "../../../src/components/multi-steps/Step1";

const render = (args) => {
  const defaultProps = {
    name: "",
    role: "",
    email: "",
    password: "",
    handleChange: () => {},
  };

  const props = { ...defaultProps, ...args };
  return shallow(<Step1 {...props} />);
};

it("should render", () => {
  const wrapper = render();
  expect(wrapper.find(".form-group").length).toBe(1);
  expect(wrapper.find("#name").length).toBe(1);
  expect(wrapper.find("#role").length).toBe(1);
  expect(wrapper.find("#email").length).toBe(1);
  expect(wrapper.find("#password").length).toBe(1);
});
