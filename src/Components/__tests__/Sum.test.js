import { sum } from "../Sum";

test("A function to calculate sum of two numbers", () => {
  const result = sum(3, 4);
  expect(result).toBe(7);
});
