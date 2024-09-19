import { orderImg } from "../../utils";

const Order = () => {
  return (
    <div className="bg-lightBlue py-6 pl-6 rounded-2xl">
      <div className="shadow-lg">
        <div className="bg-white py-5 px-4">
          <div className="text-start">
            <p className="text-sm text-darkGray">Order</p>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between min-h-[3.75rem] gap-2">
              <div className="w-10 h-auto">
                <img className="w-full" src={orderImg} alt="payback" />
              </div>
              <p className="font-poppins font-bold">00:10 - 06:40</p>
              <p className="text-textGray2">
                TK490390, AP109302 |<span className="text-sm">₦8,500,400</span>
              </p>
              <button className="text-xs bg-bgSecondary hover:bg-white focus:bg-white hover:text-bgSecondary focus:text-bgSecondary border-2 border-bgSecondary text-white px-10 py-2">
                Issue Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="font-bold text-base md:text-2xl mt-6 mb-4 text-start pr-6">
        Order Management
      </p>
      <p className="text-bgSecondary text-start pr-6">
        Register interest today...
      </p>
    </div>
  );
};

export default Order;
