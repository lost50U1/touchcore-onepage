// import icons and images
import {
  blueseatImg,
  grayseatImg,
  greenseatImg,
  turkishImg,
} from "../../utils";

// import mockdata as an api
import { seatSelections, flights } from "../../context/mockData";

// import context api and data
import { useBooking } from "../../context/useBooking";

const AncillariesDisplay = () => {
  const { setSelectedSeat } = useBooking();
  return (
    <div className="bg-lightBlue py-6 pl-6 rounded-2xl flex flex-col">
      <div className="shadow-lg">
        {/* Flight header with seat selection and airline details */}
        <div className="bg-lightBlue py-[0.875rem] pl-4 shadow-lg flex w-full text-xs justify-between">
          <div className="flex">
            {/* Dropdown for seat selection */}
            <select
              onChange={(e) => setSelectedSeat(e.target.value)}
              className="bg-bgSecondary text-white text-[0.5rem] p-[0.125] rounded-sm"
              aria-label="Select Seat"
            >
              {seatSelections.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>

            {/* Airline logo */}
            <div className="w-4 h-auto">
              <img
                className="w-full h-full"
                src={turkishImg}
                alt="Turkish Airlines logo"
              />
            </div>
          </div>

          {/* Airline code and flight number */}
          <p className="font-bold" aria-label="Airline code">
            {flights[0].airlineCode}
          </p>
          <p className="font-bold" aria-label="Flight number">
            {flights[0].flightNumber}
          </p>

          {/* Seat layout representation */}
          <div className="flex items-center gap-2 w-1/2">
            <div className="rounded-lg py-1 bg-ligherGray w-1/2"></div>
            <div className="flex items-center gap-[0.125rem] w-1/2">
              <div className="rounded-lg py-1 bg-ligherGray w-2/5"></div>
              <div className="rounded-lg py-1 bg-ligherGray w-1/5"></div>
              <div className="rounded-lg py-1 bg-ligherGray w-2/5"></div>
            </div>
          </div>
        </div>

        {/* Seat map display */}
        <div className="bg-white p-4">
          <div className="flex items-center justify-between w-full">
            {/* Seat row A */}
            <div>
              <p className="text-xs font-poppins font-bold">A</p>
              <div className="w-5 h-auto">
                <img
                  className="w-full h-full"
                  src={grayseatImg}
                  alt="Unavailable seat in row A"
                />
              </div>
            </div>

            {/* Seat row B */}
            <div>
              <p className="text-xs font-poppins font-bold">B</p>
              <div className="w-5 h-auto">
                <img
                  className="w-full h-full"
                  src={blueseatImg}
                  alt="Available seat in row B"
                />
              </div>
            </div>

            {/* Seat row 10 marker */}
            <div>
              <p className="py-2"></p>
              <div className="w-5 h-auto">
                <p className="text-xs font-poppins font-bold">10</p>
              </div>
            </div>

            {/* Seat row D */}
            <div>
              <p className="text-xs font-poppins font-bold">D</p>
              <div className="w-5 h-auto">
                <img
                  className="w-full h-full"
                  src={greenseatImg}
                  alt="Selected seat in row D"
                />
              </div>
            </div>

            {/* Seat row E */}
            <div>
              <p className="text-xs font-poppins font-bold">E</p>
              <div className="w-5 h-auto">
                <img
                  className="w-full h-full"
                  src={greenseatImg}
                  alt="Selected seat in row E"
                />
              </div>
            </div>

            {/* Seat row F */}
            <div>
              <p className="text-xs font-poppins font-bold">F</p>
              <div className="w-5 h-auto">
                <img
                  className="w-full h-full"
                  src={blueseatImg}
                  alt="Available seat in row F"
                />
              </div>
            </div>

            {/* Seat row G */}
            <div>
              <p className="text-xs font-poppins font-bold">G</p>
              <div className="w-5 h-auto">
                <img
                  className="w-full h-full"
                  src={grayseatImg}
                  alt="Unavailable seat in row G"
                />
              </div>
            </div>

            {/* Seat row 10 marker */}
            <div>
              <p className="py-2"></p>
              <div className="w-5 h-auto">
                <p className="text-xs font-poppins font-bold">10</p>
              </div>
            </div>

            {/* Seat row H */}
            <div>
              <p className="text-xs font-poppins font-bold">H</p>
              <div className="w-5 h-auto">
                <img
                  className="w-full h-full"
                  src={grayseatImg}
                  alt="Unavailable seat in row H"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ancillaries section */}
      <h3 className="font-bold text-base md:text-2xl mt-6 mb-4 text-start pr-6">
        Ancillaries
      </h3>
      <p className="text-darkGray text-start pr-6">
        Let your customers book premium seats and pay for additional baggage.
      </p>
    </div>
  );
};

export default AncillariesDisplay;
