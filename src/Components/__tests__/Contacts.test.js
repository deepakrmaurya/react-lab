import { render, screen } from "@testing-library/react";
import Contacts from "../Contacts";
import "@testing-library/jest-dom";

describe("Contacts Component Testcases", () => {
  test("Should load Contacts Component", () => {
    render(<Contacts />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("Should find Button", () => {
    render(<Contacts />);
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });
});
