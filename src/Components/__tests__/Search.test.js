import { render } from "@testing-library/react";
import Body from "../Body";
import resList from "../../utils/mockData";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// import { json } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(resList);
    },
  });
});

test("should render Body Component with Search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
});

const searchBtn = screen.getByRole("button", { name: "Search" });
console.log(searchBtn);
expect(searchBtn).toBeInTheDocument();
