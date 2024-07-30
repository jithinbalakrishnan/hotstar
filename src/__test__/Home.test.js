// https://kentcdodds.com/blog/stop-mocking-fetch
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Home from "../components/Home";
import MOCK_DATA from "../mockData/mockResMovieLits.json";
import { BrowserRouter } from "react-router-dom";
import { act } from "react";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("Render Home Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
  );
  const cardBeforeSearch = screen.getAllByTestId('card');
  expect(cardBeforeSearch.length).toBe(20);

  const inputBox = screen.getByTestId('search-input');
  fireEvent.change(inputBox, {e: {target: "drishyam"}});

  const searchButton = screen.getByRole('button', {name: "Search"});
  fireEvent.click(searchButton);

  const cardsAfterSearch = screen.getAllByTestId("card");
  expect(cardsAfterSearch.length).toBeLessThan(10)
  


});
