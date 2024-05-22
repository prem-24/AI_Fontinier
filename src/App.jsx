
import Header from "./Components/Header";
import ButtonGradient from "./assets/svg/ButtonGradient";

import Collaboration from "./Components/Collaboration";

import Hero from "./Components/Hero";
import Benefits from "./Components/Benefits";
import Services from "./Components/service";
import Pricing from "./Components/Pricing";
import Roadmap from "./Components/RoadMap";
import Footer from "./Components/Footer";
import NewsFeed from "./Components/NewsFeed";


const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits/>
        <Collaboration />
        <Services/>
        <Pricing/>
        <Roadmap/>
        <NewsFeed/>

        <Footer /> 
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
