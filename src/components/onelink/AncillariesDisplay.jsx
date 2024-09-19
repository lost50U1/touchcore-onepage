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
        <div className="bg-lightBlue py-[0.875rem] pl-4 shadow-lg flex w-full text-xs justify-between">
          <div className="flex">
            <select
              onChange={(e) => setSelectedSeat(e.target.value)}
              className="bg-bgSecondary text-white text-[0.5rem] p-[0.125] rounded-sm"
            >
              {seatSelections.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <div className="w-4 h-auto">
              <img
                className="w-full h-full"
                src={turkishImg}
                alt="turkish airlines"
              />
            </div>
          </div>
          <p className="font-bold">{flights[0].airlineCode}</p>
          <p className="font-bold">{flights[0].flightNumber}</p>
          <div className="flex items-center gap-2 w-1/2">
            <div className="rounded-lg py-1 bg-ligherGray w-1/2"></div>
            <div className="flex items-center gap-[0.125rem] w-1/2">
              <div className="rounded-lg py-1 bg-ligherGray w-2/5"></div>
              <div className="rounded-lg py-1 bg-ligherGray w-1/5"></div>
              <div className="rounded-lg py-1 bg-ligherGray w-2/5"></div>
            </div>
          </div>
        </div>
        <div className="bg-white p-4">
          <div className="flex items-center justify-between w-full">
            <div>
              <p className="text-xs font-poppins font-bold">A</p>
              <div>
                <div className="w-5 h-auto">
                  <img
                    className="w-full h-full"
                    src={grayseatImg}
                    alt="close"
                  />
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs font-poppins font-bold">B</p>
              <div>
                <div className="w-5 h-auto">
                  <img className="w-full h-full" src={blueseatImg} alt="seat" />
                </div>
              </div>
            </div>
            <div>
              <p className="py-2"></p>
              <div className="w-5 h-auto">
                <p className="text-xs font-poppins font-bold">10</p>
              </div>
            </div>
            <div>
              <p className="text-xs font-poppins font-bold">D</p>
              <div>
                <div className="w-5 h-auto">
                  <img
                    className="w-full h-full"
                    src={greenseatImg}
                    alt="seat"
                  />
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs font-poppins font-bold">E</p>
              <div>
                <div className="w-5 h-auto">
                  <img
                    className="w-full h-full"
                    src={greenseatImg}
                    alt="seat"
                  />
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs font-poppins font-bold">F</p>
              <div>
                <div className="w-5 h-auto">
                  <img className="w-full h-full" src={blueseatImg} alt="seat" />
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs font-poppins font-bold">G</p>
              <div>
                <div className="w-5 h-auto">
                  <img className="w-full h-full" src={grayseatImg} alt="seat" />
                </div>
              </div>
            </div>
            <div>
              <p className="py-2"></p>
              <div className="w-5 h-auto">
                <p className="text-xs font-poppins font-bold">10</p>
              </div>
            </div>
            <div>
              <p className="text-xs font-poppins font-bold">G</p>
              <div>
                <div className="w-5 h-auto">
                  <img className="w-full h-full" src={grayseatImg} alt="seat" />
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs font-poppins font-bold">H</p>
              <div>
                <div className="w-5 h-auto">
                  <img className="w-full h-full" src={grayseatImg} alt="seat" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="font-bold text-base md:text-2xl mt-6 mb-4 text-start pr-6">
        Ancillaries
      </p>
      <p className="text-darkGray text-start pr-6">
        Let your customers book premium sears and pay for additional baggage.
      </p>
    </div>
  );
};

export default AncillariesDisplay;
