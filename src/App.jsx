// components
import CtaSection from "./components/CtaSection";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import OneLink from "./components/OneLink";
import PlatformSections from "./components/PlatformSections";
import Travel from "./components/Travel";

const App = () => {
  return (
    <main className="min-h-screen flex flex-col font-brfirma">
      <Navbar />
      <Header />
      <Travel />
      <OneLink />
      <PlatformSections />
      <CtaSection />
    </main>
  );
};

export default App;
