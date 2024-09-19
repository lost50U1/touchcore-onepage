import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchDisplay from "../components/onelink/SearchDisplay";
import { BookingProvider } from "../context/BookingContext";

describe("SearchDisplay Component", () => {
  it("calls setSelectedReturn with the correct value when an option is selected", () => {
    // Render the component within the BookingProvider to provide context
    render(
      <BookingProvider>
        <SearchDisplay />
      </BookingProvider>
    );

    // Find the select element for return options
    const returnSelect = screen.getByLabelText("Return option");

    // Simulate a change event to select a different return option
    fireEvent.change(returnSelect, { target: { value: "No Return" } });

    // Assert that the selected value is updated correctly
    expect(returnSelect.value).toBe("No Return");
  });
});
