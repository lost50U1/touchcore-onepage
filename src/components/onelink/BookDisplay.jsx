import {
  clockImg,
  flighticonImg,
  lefticonImg,
  righticonImg,
  turkish2Img,
} from "../../utils";

const BookDisplay = () => {
  return (
    <div className="bg-lightBlue py-6 pl-6 rounded-2xl flex flex-col">
      <div className="shadow-lg">
        <div className="bg-lightBlue py-2 pl-4 shadow-lg flex flex-wrap w-full items-center justify-between gap-2 text-xs min-h-[2.5625rem]">
          <div>
            <img src={turkish2Img} alt="turkish logo" />
          </div>
          <p className="font-bold">VS</p>
          <p className="font-bold">411</p>
          <p className="font-bold">LOS - LHR</p>
          <p className="font-bold">10:30PM - 05:25PM +1</p>
          <p className="font-bold">06:55</p>
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
        Book
      </p>
      <p className="text-darkGray text-start pr-6">
        Capture all relevant details from your customer in a one-step checkout
      </p>
    </div>
  );
};

export default BookDisplay;
