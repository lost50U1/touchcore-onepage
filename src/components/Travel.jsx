const Travel = () => {
  return (
    <section className="py-24">
      {/* The Fastest Way to Sell Travel Section */}
      <div className="container text-center w-4/5">
        <h2 className="text-2xl font-bold md:text-4xl mb-16">
          The fastest way to sell travel
        </h2>
        {/* Grid Cards  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          <div>
            <div className="flex flex-col">
              <div className="bg-lightBlue text-base py-9 md:text-2xl sm:max-w-[6.25rem] w-full sm:min-h-[6.25rem] flex items-center justify-center font-bold mb-2">
                1
              </div>
              <div className="sm:text-start">
                <p className="font-bold text-base md:text-2xl mb-2">
                  Subscribe
                </p>
                <p className="text-textGray">
                  Subscribe to the website plan on Intraverse.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col">
              <div className="bg-lightBlue text-base py-9 md:text-2xl sm:max-w-[6.25rem] w-full sm:min-h-[6.25rem] flex items-center justify-center font-bold mb-2">
                2
              </div>
              <div className="sm:text-start">
                <p className="font-bold text-base md:text-2xl mb-2">
                  Customize
                </p>
                <p className="text-textGray">
                  Customize every content on your website to fit your brand.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col">
              <div className="bg-lightBlue text-base py-9 md:text-2xl sm:max-w-[6.25rem] w-full sm:min-h-[6.25rem] flex items-center justify-center font-bold mb-2">
                3
              </div>
              <div className="sm:text-start">
                <p className="font-bold text-base md:text-2xl mb-2">
                  Start selling
                </p>
                <p className="text-textGray">
                  Publish to your own domain and start selling instantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Travel;
