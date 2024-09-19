// react hooks and mock data imported
import { createContext, useState, useEffect } from "react";
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
  const [selectedFlights, setSelectedFlights] = useState([]);

  // Simulate an API call to fetch flights
  const fetchFlights = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(flights);
      }, 1000); // Simulate 1-second delay
    });
  };

  useEffect(() => {
    // Fetching flights on mount
    const getFlights = async () => {
      const fetchedFlights = await fetchFlights();
      setSelectedFlights(fetchedFlights);
    };

    getFlights();
  }, []);

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
