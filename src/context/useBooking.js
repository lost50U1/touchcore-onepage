// useBooking.js
import { useContext } from "react";
import { BookingContext } from "./BookingContext"; // Adjust path if needed

export const useBooking = () => useContext(BookingContext);
