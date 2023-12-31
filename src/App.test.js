import { render, screen } from "@testing-library/react";
import App, { doubleMyNumber, tellMeGoodorBad } from "./App";

test("renders Welcome text", () => {
  render(<App />);
  const welcomeText = screen.getByText("Welcome to my site!");
  expect(welcomeText).toBeInTheDocument();
});

test("returns a positive string value", () => {
  //Testing if the function returns this string value
  expect(tellMeGoodorBad("Good")).toBe("The response has returned Good");
  //its all working!
});

test("returns a negative string value", () => {
  expect(tellMeGoodorBad("e")).toBe("we got problems");
  //its all working!
});

test("return the given number x2", () => {
  console.log("SHOULD BE 20 ====>", doubleMyNumber(10));
  expect(doubleMyNumber(10)).toEqual("Your number doubled is 20");
});

// test("console log response", () => {
//   //i created a mock function
//   console.log = jest.fn();
//   //i invoked a function with a given value
//   tellMeGoodorBad("Good");
//   //Testing if the console.log returns this string value
//   expect(console.log).toHaveBeenCalledWith("The response has returned Good");
//   //its all working!
// });
