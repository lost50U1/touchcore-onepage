export const flights = [
  {
    airlineCode: "VS",
    flightNumber: "411",
    destination: "Lagos",
    destinationCode: "LOS",
    departure: "Murtala Muhammed International (LOS)",
    departureCode: "LOS",
    departureTime: "10:30PM",
    arrivalTime: "05:25PM +1",
    duration: "12h 14m",
    stops: "1 stop",
    airline: "Airline A",
    price: "$950",
    availableSeats: 5,
    flightClass: "Economy",
    baggageAllowance: "1 checked bag, 1 carry-on",
    meal: "Included",
    wiFiAvailability: "Yes",
    timeofArrival: "06:55",
  },
  {
    airlineCode: "DL",
    flightNumber: "205",
    destination: "New York",
    destinationCode: "JFK",
    departure: "John F. Kennedy International (JFK)",
    departureCode: "JFK",
    departureTime: "08:00AM",
    arrivalTime: "03:30PM",
    duration: "7h 30m",
    stops: "Non-stop",
    airline: "Airline B",
    price: "$1200",
    availableSeats: 12,
    flightClass: "Business",
    baggageAllowance: "2 checked bags, 1 carry-on",
    meal: "Included",
    wiFiAvailability: "Yes",
  },
  {
    airlineCode: "BA",
    flightNumber: "179",
    destination: "London",
    destinationCode: "LHR",
    departure: "Heathrow (LHR)",
    departureCode: "LHR",
    departureTime: "12:00PM",
    arrivalTime: "06:45PM",
    duration: "6h 45m",
    stops: "2 stops",
    airline: "Airline C",
    price: "$800",
    availableSeats: 8,
    flightClass: "Economy",
    baggageAllowance: "1 checked bag, 1 carry-on",
    meal: "Not included",
    wiFiAvailability: "No",
  },
  {
    airlineCode: "AF",
    flightNumber: "355",
    destination: "Paris",
    destinationCode: "CDG",
    departure: "Charles de Gaulle (CDG)",
    departureCode: "CDG",
    departureTime: "14:30PM",
    arrivalTime: "12:20AM +1",
    duration: "9h 50m",
    stops: "1 stop",
    airline: "Airline D",
    price: "$1050",
    availableSeats: 3,
    flightClass: "Premium Economy",
    baggageAllowance: "1 checked bag, 1 carry-on",
    meal: "Included",
    wiFiAvailability: "Yes",
  },
];

export const returnOptions = ["Return", "No Return"];

export const seatSelections = [
  "Select Seat",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
];

export const stopsOptions = ["1 stop", "2 stops", "Non-stop"];

export const airlines = ["Airline A", "Airline B", "Airline C", "Airline D"];

export const flightClasses = [
  "Economy",
  "Premium Economy",
  "Business",
  "First Class",
];

export const baggageOptions = [
  "1 checked bag, 1 carry-on",
  "2 checked bags, 1 carry-on",
  "No checked bag, 1 carry-on",
];

export const mealOptions = ["Included", "Not included"];

export const wiFiAvailabilityOptions = ["Yes", "No"];
