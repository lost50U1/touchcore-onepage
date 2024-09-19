// BookingContext.js
import { createContext, useState } from "react";
import PropTypes from "prop-types";
import {
  returnOptions,
  seatSelections,
  stopsOptions,
  airlines,
  flights,
} from "./mockData";

// Create a context for booking data
export const BookingContext = createContext();

// Create a provider component
export const BookingProvider = ({ children }) => {
  const [selectedReturn, setSelectedReturn] = useState(returnOptions[0]);
  const [selectedSeat, setSelectedSeat] = useState(seatSelections[0]);
  const [selectedStop, setSelectedStop] = useState(stopsOptions[0]);
  const [selectedAirline, setSelectedAirline] = useState(airlines[0]);
  const [selectedFlights, setSelectedFlights] = useState(flights[0]);

  return (
    <BookingContext.Provider
      value={{
        selectedReturn,
        setSelectedReturn,
        selectedSeat,
        setSelectedSeat,
        selectedStop,
        setSelectedStop,
        selectedAirline,
        setSelectedAirline,
        selectedFlights,
        setSelectedFlights,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

// Add PropTypes for the children
BookingProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
