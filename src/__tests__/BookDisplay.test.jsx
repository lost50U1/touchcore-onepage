import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import BookDisplay from "../components/onelink/BookDisplay";
import { BookingProvider } from "../context/BookingContext";
import { flights } from "../context/mockData";

describe("BookDisplay Component", () => {
  it("renders the airline code correctly", () => {
    // Render the component within the BookingProvider to provide context
    render(
      <BookingProvider>
        <BookDisplay />
      </BookingProvider>
    );

    // Find the element with the aria-label "Airline code"
    const airlineCodeElement = screen.getByLabelText("Airline code");

    // Assert that the airline code is rendered correctly
    expect(airlineCodeElement).toHaveTextContent(flights[0].airlineCode);
  });
});
