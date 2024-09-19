import {
  clockImg,
  flighticonImg,
  lefticonImg,
  righticonImg,
} from "../../utils";

const SearchDisplay = () => {
  return (
    <div className="bg-lightBlue py-6 pl-6 rounded-2xl flex flex-col">
      <div className="shadow-lg">
        <div className="bg-lightBlue py-1 pl-4 pr-2 shadow-lg flex flex-wrap w-full justify-between gap-2 text-xs min-h-[2.5625rem] font-bold">
          <select className="bg-lightBlue p-2">
            <option>Return</option>
          </select>
          <select className="bg-bgSecondary text-white px-2 py-1 rounded-sm">
            <option>Select Seat</option>
          </select>
          <select className="bg-white p-2">
            <option>1 stop</option>
          </select>
          <button className="bg-white p-2">Airline</button>
        </div>
        <div className="bg-white py-4 px-4 sm:px-[1.979375rem] flex justify-end gap-4">
          <div className="text-end">
            <p className="font-bold">10:30</p>
            <p className="text-xs text-textGray2">
              Murtala Muhammed (LOS) Lagos
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex items-center">
              <div>
                <img src={lefticonImg} alt="lefticon" />
              </div>
              <div className="flex items-center bg-lightestGray py-1 rounded-lg">
                <div>
                  <img src={flighticonImg} alt="flighticon" />
                </div>
                <p className="text-[0.625rem] text-bgSecondary">1 stop</p>
              </div>
              <div>
                <img src={righticonImg} alt="righticon" />
              </div>
            </div>
            <div className="flex items-center gap-1">
              <div>
                <img src={clockImg} alt="clock" />
              </div>
              <p className="text-xs">12h 14m</p>
            </div>
          </div>
        </div>
      </div>
      <p className="font-bold text-base md:text-2xl mt-6 mb-4 text-start pr-6">
        Search
      </p>
      <p className="text-darkGray text-start pr-6">
        Make searching flights an intuitive experience for your customers.
      </p>
    </div>
  );
};

export default SearchDisplay;
