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

it("should show alert when clicking next and invalid email", () => {
  const wrapper = render({ email: "foo" });
  expect(wrapper.find(".alert").length).toBe(0);
  wrapper.find("#next").simulate("click");
  expect(wrapper.find(".alert").length).toBe(1);
});
it("should show alert  when clicking next and empty email", () => {
  const wrapper = render();
  expect(wrapper.find(".alert").length).toBe(0);
  wrapper.find("#next").simulate("click");
  expect(wrapper.find(".alert").length).toBe(1);
});

it("should show alert when clicking next and invalid password", () => {
  const wrapper = render({ password: "foo" });
  expect(wrapper.find(".alert").length).toBe(0);
  wrapper.find("#next").simulate("click");
  expect(wrapper.find(".alert").length).toBe(1);
});

it("should not show alert when clicking next", () => {
  const wrapper = render({
    name: "pepe",
    email: "email@good.com",
    password: "NiceTest12345",
  });
  expect(wrapper.find(".alert").length).toBe(0);
  wrapper.find("#next").simulate("click");
  expect(wrapper.find(".alert").length).toBe(0);
});

it("should not show alert when clicking next twice", () => {
  const wrapper = render({
    name: "foo",
    email: "bar@foo.com",
    password: "PA1234567a",
  });
  expect(wrapper.find(".alert").length).toBe(0);
  wrapper.find("#next").simulate("click");
  expect(wrapper.find(".alert").length).toBe(0);

  wrapper.find("[data-test-submit]").simulate("click");
  expect(wrapper.find(".alert").length).toBe(0);
});
