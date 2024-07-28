import { render, screen } from "@testing-library/react";
import Cards from "../components/Cards/Cards";
import "@testing-library/jest-dom";


describe("Card component test case", () => {
    it("Should load card component", () => {
        render(<Cards list = {[]}/>);
    
        const cardContainer = screen.getByTestId("card-test-container");
    
        // Assertion
        expect(cardContainer).toBeInTheDocument();
      });
})