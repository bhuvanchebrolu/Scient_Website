import PastEventsGallery from "../Components/EventsGallery";
import Hero from "../Components/Hero";
import CanvasBackground from "../CanvasBackground";
import BenefitsSection from "../Components/BenefitsSections";
import FAQ from "../Components/FAQ";
import Sponsors from "../Components/Sponsors";
import EventGallery from "../Components/Gallery";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import Countdown from "../Components/Countdown";
import Timeline from "../Components/Timeline";

const Contrive = () => {
  return (
    <CanvasBackground>
       <Navbar/> 
      <Hero />
      {/* <EventGallery/> */}
      <BenefitsSection/>
      <Timeline/>
      <Sponsors/>
      <FAQ/>
      <Countdown/>
      <Footer/>
    </CanvasBackground>
  );
};

export default Contrive;