import { paystackImg } from "../../utils";

const Payment = () => {
  return (
    <div className="bg-lightBlue py-6 pl-6 rounded-2xl">
      <div className="shadow-lg">
        <div className="bg-white py-5 px-4">
          <div className="text-start">
            {/* Secured payment info */}
            <p className="text-sm text-darkGray">Secured payment with</p>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between min-h-[3.75rem] gap-2">
              {/* Payment method logo */}
              <div className="mt-2">
                <img
                  src={paystackImg}
                  alt="Paystack logo for secured payment"
                />
              </div>

              {/* Payment card information */}
              <p
                className="text-textGray2"
                aria-label="Card number ending in 3920 with MM/YY and CVC"
              >
                **** **** **** 3920 | MM/YY CVC
              </p>

              {/* Pay button */}
              <button
                className="text-xs bg-bgSecondary hover:bg-white focus:bg-white hover:text-bgSecondary focus:text-bgSecondary border-2 border-bgSecondary text-white px-10 py-2"
                aria-label="Proceed to payment"
              >
                Pay
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Payments section header */}
      <h3 className="font-bold text-base md:text-2xl mt-6 mb-4 text-start pr-6">
        Payments
      </h3>

      {/* Additional information about payment security */}
      <p className="text-darkGray text-start pr-6">
        Take payments securely from your customers using our payments.
      </p>
    </div>
  );
};

export default Payment;
