// import icons and images
import {
  clockImg,
  flighticonImg,
  lefticonImg,
  righticonImg,
} from "../../utils";

// import mockdata as an api
import {
  returnOptions,
  seatSelections,
  stopsOptions,
  flights,
} from "../../context/mockData";

// import context api and data
import { useBooking } from "../../context/useBooking";

const SearchDisplay = () => {
  const { setSelectedReturn, setSelectedSeat, setSelectedStop } = useBooking();

  return (
    <div className="bg-lightBlue py-6 pl-6 rounded-2xl flex flex-col">
      <div className="shadow-lg">
        <div className="bg-lightBlue py-1 pl-4 pr-2 shadow-lg flex flex-wrap w-full justify-between gap-2 text-xs min-h-[2.5625rem] font-bold">
          {/* Return option select */}
          <label htmlFor="returnSelect" className="sr-only">
            Return
          </label>
          <select
            id="returnSelect"
            onChange={(e) => setSelectedReturn(e.target.value)}
            className="bg-lightBlue p-2"
            aria-label="Return option"
          >
            {returnOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          {/* Seat selection select */}
          <label htmlFor="seatSelect" className="sr-only">
            Seat Selection
          </label>
          <select
            id="seatSelect"
            onChange={(e) => setSelectedSeat(e.target.value)}
            className="bg-bgSecondary text-white px-2 py-1 rounded-sm"
            aria-label="Seat selection"
          >
            {seatSelections.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          {/* Stops option select */}
          <label htmlFor="stopsSelect" className="sr-only">
            Stops
          </label>
          <select
            id="stopsSelect"
            onChange={(e) => setSelectedStop(e.target.value)}
            className="bg-white p-2"
            aria-label="Stops option"
          >
            {stopsOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          {/* Airline button */}
          <button className="bg-white p-2" aria-label="Select airline">
            Airline
          </button>
        </div>

        <div className="bg-white py-4 px-4 sm:px-[1.979375rem] flex justify-end gap-4">
          <div className="text-end">
            <p className="font-bold">{flights[0].departureTime}</p>
            <p className="text-xs text-textGray2">{flights[0].departure}</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex items-center">
              {/* Left icon indicating departure */}
              <img src={lefticonImg} alt="Left icon indicating departure" />
              <div className="flex items-center bg-lightestGray py-1 rounded-lg">
                {/* Flight icon indicating flight details */}
                <img
                  src={flighticonImg}
                  alt="Flight icon indicating flight details"
                />
                <p className="text-[0.625rem] text-bgSecondary">
                  {flights[0].stops}
                </p>
              </div>
              {/* Right icon indicating arrival */}
              <img src={righticonImg} alt="Right icon indicating arrival" />
            </div>
            <div className="flex items-center gap-1">
              {/* Clock icon indicating flight duration */}
              <img src={clockImg} alt="Clock icon indicating flight duration" />
              <p className="text-xs">{flights[0].duration}</p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="font-bold text-base md:text-2xl mt-6 mb-4 text-start pr-6">
        Search
      </h2>
      <p className="text-darkGray text-start pr-6">
        Make searching flights an intuitive experience for your customers.
      </p>
    </div>
  );
};

export default SearchDisplay;
