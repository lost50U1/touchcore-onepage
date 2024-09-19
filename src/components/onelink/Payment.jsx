import { paystackImg } from "../../utils";

const Payment = () => {
  return (
    <div className="bg-lightBlue py-6 pl-6 rounded-2xl">
      <div className="shadow-lg">
        <div className="bg-white py-5 px-4">
          <div className="text-start">
            <p className="text-sm text-darkGray">Secured payment with</p>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between min-h-[3.75rem] gap-2">
              <div className="mt-2">
                <img src={paystackImg} alt="payback" />
              </div>
              <p className="text-textGray2">**** **** **** 3920 | MM/YY CVC</p>
              <button className="text-xs bg-bgSecondary hover:bg-white focus:bg-white hover:text-bgSecondary focus:text-bgSecondary border-2 border-bgSecondary text-white px-10 py-2">
                Pay
              </button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <p className="font-bold text-base md:text-2xl mt-6 mb-4 text-start pr-6">
        Payments
      </p>
      <p className="text-darkGray text-start pr-6">
        Take payments securely from your customers using our payments.
      </p>
    </div>
  );
};

export default Payment;
