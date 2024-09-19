// Import necessary hooks and context
import { useContext } from "react";
import { BookingContext } from "./BookingContext";

// Custom hook to access the booking context
export const useBooking = () => useContext(BookingContext);
