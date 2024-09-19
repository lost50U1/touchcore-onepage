import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import AncillariesDisplay from "../components/onelink/AncillariesDisplay";
import { blueseatImg, grayseatImg, greenseatImg } from "../utils";
import { BookingProvider } from "../context/BookingContext";

// Mock the useBooking hook
const mockSetSelectedSeat = vi.fn();

vi.mock("../context/useBooking", () => ({
  useBooking: () => ({
    setSelectedSeat: mockSetSelectedSeat,
    setSelectedReturn: vi.fn(),
    setSelectedStop: vi.fn(),
  }),
}));

describe("AncillariesDisplay Component", () => {
  beforeEach(() => {
    // Reset the mock before each test
    mockSetSelectedSeat.mockClear();
  });

  it("should render without crashing", () => {
    render(
      <BookingProvider>
        <AncillariesDisplay />
      </BookingProvider>
    );

    // Check if the component renders correctly
    expect(screen.getByLabelText("Select Seat")).toBeInTheDocument();
    expect(screen.getByAltText("Turkish Airlines logo")).toBeInTheDocument();
    expect(screen.getByText(/Ancillaries/i)).toBeInTheDocument();
  });

  it("should display correct images and text", () => {
    render(
      <BookingProvider>
        <AncillariesDisplay />
      </BookingProvider>
    );

    // Validate images
    expect(screen.getByAltText("Unavailable seat in row A")).toHaveAttribute(
      "src",
      grayseatImg
    );
    expect(screen.getByAltText("Available seat in row B")).toHaveAttribute(
      "src",
      blueseatImg
    );
    expect(screen.getByAltText("Selected seat in row D")).toHaveAttribute(
      "src",
      greenseatImg
    );
  });

  it("calls setSelectedSeat with the correct value when an option is selected", () => {
    render(
      <BookingProvider>
        <AncillariesDisplay />
      </BookingProvider>
    );

    // Find the select element for seat selection
    const seatSelect = screen.getByLabelText("Select Seat");

    // Simulate a change event to select a different seat option
    fireEvent.change(seatSelect, { target: { value: "A" } });

    // Assert that setSelectedSeat was called with the correct value
    expect(mockSetSelectedSeat).toHaveBeenCalledWith("A");
  });
});
