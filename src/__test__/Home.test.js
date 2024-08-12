// https://kentcdodds.com/blog/stop-mocking-fetch
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { act } from "react";
import "@testing-library/jest-dom";

import Home from "../components/Home";
import MOCK_DATA from "../mockData/mockResMovieLits.json";
import { Provider } from "react-redux";

// 1. Render 2. Query 3.Assertion
// describe is for grouping, it is for testing.
// describe(name, fn) creates a block that groups together several related tests.
// test and it are the same
// it is where you perform individual tests. You should be able to describe each test like a little sentence,
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("Render Home Component", async () => {
  // 1. Render
  // when you call codes like render()/ some code that trigger a state update,
  // you wrap those codes inside act().
  // act() will make sure all the states are updated to the Dom tree & the useEffect are executed, before act() is done
  await act(async () =>
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
  );
  // 2. Query
  const cardBeforeSearch = screen.getAllByTestId("card");
  // 3. Assertion
  expect(cardBeforeSearch.length).toBe(20);

  const inputBox = screen.getByTestId("search-input");
  fireEvent.change(inputBox, { e: { target: "drishyam" } });

  const searchButton = screen.getByRole("button", { name: "Search" });
  fireEvent.click(searchButton);

  const cardsAfterSearch = screen.getAllByTestId("card");
  expect(cardsAfterSearch.length).toBeLessThan(10);
});
