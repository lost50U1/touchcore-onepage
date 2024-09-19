const CtaSection = () => {
  return (
    <section className="pb-24">
      <div className="container text-center w-5/6">
        <div className="bg-lighterBlue rounded-2xl flex flex-col sm:flex-row gap-4 items-center sm:justify-between shadow-2xl p-8 sm:p-[3.75rem]">
          <div className="flex flex-col items-start">
            <h3 className="font-bold text-xl sm:text-3xl mb-2">
              Get your website today!
            </h3>
            <p className="text-textGray">
              Sell flights, hotels, and tours from about the world.
            </p>
          </div>
          {/* contact links */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            <a
              className="font-poppins bg-bgSecondary hover:bg-white focus:bg-white hover:text-bgSecondary focus:text-bgSecondary border-2 hover:border-bgSecondary focus:border-bgSecondary text-lightGray font-bold text-base md:text-2xl py-4 px-[1.15625rem] rounded-lg"
              href="tel:102839082932"
            >
              02839082932
            </a>
            <a
              className="font-poppins py-4 px-[1.15625rem] hover:underline focus:underline text-bgSecondary font-semibold"
              href="mailto:hello@test.com"
            >
              hello@test.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
