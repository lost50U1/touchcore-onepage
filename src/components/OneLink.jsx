//components
import BookDisplay from "./onelink/BookDisplay";
import SearchDisplay from "./onelink/SearchDisplay";
import AncillariesDisplay from "./onelink/AncillariesDisplay";
import Payment from "./onelink/Payment";
import Order from "./onelink/Order";

const OneLink = () => {
  return (
    <section className="mb-24">
      <div className="container text-center w-5/6">
        <h2 className="text-2xl font-bold md:text-4xl mb-8">
          Everything you need, in one link.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {/* search display */}
          <SearchDisplay />
          {/* book display */}
          <BookDisplay />
          {/* Ancillaries display */}
          <AncillariesDisplay />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mt-7">
          {/* Payments Card */}
          <Payment />
          {/* Order Card */}
          <Order />
        </div>
      </div>
    </section>
  );
};

export default OneLink;
