import React from "react";
import { mount } from "enzyme";
import MultiSteps from "../../../src/components/multi-steps/MuliSteps";

const render = (args) => {
  const defaultProps = {
    currentStep: 1,
    name: "",
    role: "", // not required
    email: "",
    password: "",
    receiveUpdate: true,
    receiveCommunication: false,
  };

  const props = { ...defaultProps, ...args };
  return mount(<MultiSteps {...props} />);
};

it("should render error when clicking next", () => {
  const wrapper = render();
  expect(wrapper.find(".alert").length).toBe(0);
  wrapper.find("#next").simulate("click");
  expect(wrapper.find(".alert").length).toBe(1);
});

it("should not render error when clicking next", () => {
  const wrapper = render({
    name: "pepe",
    email: "email",
    password: "password",
  });
  expect(wrapper.find(".alert").length).toBe(0);
  wrapper.find("#next").simulate("click");
  expect(wrapper.find(".alert").length).toBe(0);
});

it.skip("should not render error when clicking next twice", () => {
  const wrapper = render({
    name: "foo",
    email: "bar",
    password: "password",
  });
  expect(wrapper.find(".alert").length).toBe(0);
  wrapper.find("#next").simulate("click");
  expect(wrapper.find(".alert").length).toBe(0);

  wrapper.find("[data-test-submit]").simulate("click");
  expect(wrapper.find(".alert").length).toBe(0);
});
