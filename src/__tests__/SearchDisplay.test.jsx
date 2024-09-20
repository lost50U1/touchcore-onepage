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

    expect(returnSelect.value).toBe("No Return");

    // Find the select element for seat options
    const seatSelect = screen.getByLabelText("Seat selection");

    // Simulate a change event to select a different seat option
    fireEvent.change(seatSelect, { target: { value: "A" } });

    expect(seatSelect.value).toBe("A");

    // Find the select element for seat options
    const stopsSelect = screen.getByLabelText("Stops option");

    // Simulate a change event to select a different seat option
    fireEvent.change(stopsSelect, { target: { value: "2 stops" } });

    expect(stopsSelect.value).toBe("2 stops");
  });
});
