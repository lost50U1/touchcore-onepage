// import icons and images
import {
  clockImg,
  flighticonImg,
  lefticonImg,
  righticonImg,
  turkish2Img,
} from "../../utils";

// import mockdata as an api
import { flights } from "../../context/mockData";

const BookDisplay = () => {
  return (
    <div className="bg-lightBlue py-6 pl-6 rounded-2xl flex flex-col">
      <div className="shadow-lg">
        {/* Flight details header section */}
        <div className="bg-lightBlue py-2 pl-4 shadow-lg flex flex-wrap w-full items-center justify-between gap-2 text-xs min-h-[2.5625rem]">
          {/* Airline logo */}
          <div>
            <img src={turkish2Img} alt="Turkish Airlines logo" />
          </div>
          {/* Airline Code */}
          <p className="font-bold" aria-label="Airline code">
            {flights[0].airlineCode}
          </p>
          {/* Flight Number */}
          <p className="font-bold" aria-label="Flight number">
            {flights[0].flightNumber}
          </p>
          {/* Departure and arrival airport codes */}
          <p className="font-bold" aria-label="Departure and Arrival codes">
            {flights[0].departureCode} - {flights[2].departureCode}
          </p>
          {/* Departure and arrival times */}
          <p className="font-bold" aria-label="Departure and Arrival times">
            {flights[0].departureTime} - {flights[0].arrivalTime}
          </p>
          {/* Time of Arrival */}
          <p className="font-bold" aria-label="Time of arrival">
            {flights[0].timeofArrival}
          </p>
        </div>

        {/* Flight details body section */}
        <div className="bg-white py-4 px-4 sm:px-7 flex flex-col items:end md:justify-end md:flex-row gap-1 w-full">
          {/* Departure details */}
          <div className="text-end">
            <p className="font-bold" aria-label="Departure time">
              {flights[0].departureTime}
            </p>
            <p className="text-xs text-textGray2">{flights[0].departure}</p>
          </div>

          {/* Flight journey details */}
          <div className="flex flex-col justify-center items-center">
            <div className="flex items-center">
              {/* Left icon indicating departure */}
              <img src={lefticonImg} alt="Left icon indicating departure" />
              <div className="inline-flex items-center bg-lightestGray py-1 rounded-lg min-w-max">
                {/* Flight icon indicating number of stops */}
                <img
                  src={flighticonImg}
                  alt="Flight icon indicating flight stops"
                />
                <p
                  className="text-[0.625rem] text-bgSecondary"
                  aria-label="Number of stops"
                >
                  {flights[0].stops}
                </p>
              </div>
              {/* Right icon indicating arrival */}
              <img src={righticonImg} alt="Right icon indicating arrival" />
            </div>
            {/* Flight duration details */}
            <div className="flex items-center gap-1">
              <img src={clockImg} alt="Clock icon indicating flight duration" />
              <p className="text-xs">{flights[0].duration}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Booking section */}
      <h3 className="font-bold text-base md:text-2xl mt-6 mb-4 text-start pr-6">
        Book
      </h3>
      <p className="text-darkGray text-start pr-6">
        Capture all relevant details from your customer in a one-step checkout
      </p>
    </div>
  );
};

export default BookDisplay;
