// Importing components and context
import { BookingProvider } from "../context/BookingContext";
import BookDisplay from "./onelink/BookDisplay";
import SearchDisplay from "./onelink/SearchDisplay";
import AncillariesDisplay from "./onelink/AncillariesDisplay";
import Payment from "./onelink/Payment";
import Order from "./onelink/Order";

const OneLink = () => {
  return (
    // Provide global booking context
    <BookingProvider>
      {/* Main content section */}
      <section className="mb-24 mt-12">
        <div className="container text-center w-5/6">
          {/* Page heading */}
          <h2 className="text-2xl font-bold md:text-4xl mb-8">
            Everything you need, in one link.
          </h2>
          {/* Display components in a responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            <SearchDisplay />
            <BookDisplay />
            <AncillariesDisplay />
          </div>
          {/* Payment and order section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mt-7">
            <Payment />
            <Order />
          </div>
        </div>
      </section>
    </BookingProvider>
  );
};

export default OneLink;
