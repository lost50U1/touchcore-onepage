import { linktempImg } from "../utils";

const Header = () => {
  return (
    <section className="bg-black text-white pt-36">
      <div className="container text-center w-3/4 md:w-4/6">
        {/* header */}
        <div className="mb-20">
          <h1 className="font-black text-4xl md:text-[4rem] md:leading-[5.2rem]">
            Start selling travel today on your own website
          </h1>
          <p className="text-textGray my-4">
            Customize your travel website, and start selling. Let’s get your
            business off the ground with our intuitive tools!
          </p>
          <button className="bg-bgSecondary hover:bg-white focus:bg-white hover:text-bgSecondary focus:text-bgSecondary border-2  border-bgSecondary py-4 px-6 text-base md:text-lg rounded-lg font-poppins w-1/2 md:w-1/4">
            Try it now
          </button>
        </div>
        {/* hero secton  */}
        <div>
          <img src={linktempImg} alt="link template" />
        </div>
      </div>
    </section>
  );
};

export default Header;
