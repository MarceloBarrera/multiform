import { validatePassword } from "../../src/utils/Utils";

it("should have at least 9 characters", () => {
  const result = validatePassword("pepe");
  expect(result).toBe("Password must have at least 9 characters");
});

it("should have at least 9 characters", () => {
  const result = validatePassword("123456789");
  expect(result).toBe("Password must have at least 1 uppercase");
});

it("should have at least 9 characters", () => {
  const result = validatePassword("123456789A");
  expect(result).toBe("Password must have at least 1 lowercase");
});
it("should have at least 9 characters", () => {
  const result = validatePassword("foobarfoA");
  expect(result).toBe("Password must have at least 1 number");
});
