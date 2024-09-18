import { frame1Img, frame2Img, frame3Img } from "../utils";

const PlatformSections = () => {
  return (
    <>
      {/* Customize Section */}
      <section className="mb-20">
        <div className="container text-center w-5/6">
          <h2 className="text-2xl font-bold md:text-4xl mb-20">
            An easy to use travel booking platform
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:justify-between">
            <div className="flex flex-col text-start w-full sm:w-1/2">
              <h3 className="font-bold text-xl sm:text-3xl mb-2">
                Customize every content on your website
              </h3>
              <p className="text-textGray">
                Offer your customer a seamless travel booking experience,
                customised to your brand.
              </p>
            </div>
            {/* Side Image */}
            <div className="w-full sm:w-1/2">
              <img src={frame1Img} alt="link template" />
            </div>
          </div>
        </div>
      </section>
      {/* Focus Section */}
      <section className="mb-20">
        <div className="container text-center w-5/6">
          <div className="flex flex-col-reverse sm:flex-row gap-6 items-center sm:justify-between">
            {/* Side Image */}
            <div className="w-full sm:w-1/2">
              <img src={frame2Img} alt="link template" />
            </div>
            <div className="flex flex-col text-start w-full sm:w-1/2">
              <h3 className="font-bold text-xl sm:text-3xl mb-2">
                Focus on what matters
              </h3>
              <p className="text-textGray">
                We take care of the intricate details of travel expertise,
                accreditation, and airline partnerships, so you don't have to—no
                need for additional development resources. Your customers can
                easily book flights with over 900 top airlines worldwide, along
                with accommodations, tours, and insurance. We save you time and
                resources so that you can focus on what matters most - running
                your business.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Earn More Money Section */}
      <section className="mb-20">
        <div className="container text-center w-5/6">
          <div className="flex flex-col w-full sm:flex-row gap-6 items-center sm:justify-between">
            <div className="flex flex-col text-start w-full min-h-full sm:w-1/2">
              <h3 className="font-bold text-xl sm:text-3xl mb-2">
                Earn more money
              </h3>
              <p className="text-textGray">
                Take control of the entire travel experience. Effortlessly add
                markups to all travel products using our user-friendly
                dashboard. Upsell your customers with accommodations, things to
                do and insurance products.
              </p>
            </div>
            {/* Side Image */}
            <div className="w-full sm:w-1/2">
              <img src={frame3Img} alt="link template" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlatformSections;
