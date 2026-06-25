import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BookingBar from "./components/BookingBar";
import Stats from "./components/Stats";
import Rooms from "./components/Rooms";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import MapSection from "./components/MapSection";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <BookingBar />
      <Stats />
      <Rooms />
      <WhyChooseUs />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <MapSection />
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}

export default App;