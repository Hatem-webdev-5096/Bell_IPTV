import MyNavbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Channels from "./components/channels/Channels";
import Pricing from "./components/pricing/Pricing";
import Multiplatform from "./components/mutliplatform/Multiplatform";
import Testimonials from "./components/testimonials/Testimonials";
import Support from "./components/support/Support";
import Footer from "./components/footer/Footer";
import FLoatingButton from "./components/UI/FloatingButton";

function App() {
  return (
    <>
    <MyNavbar />
    <Hero />
    <Channels />
    <Multiplatform />
    <Pricing />
    <Testimonials />
    <Support />
    <Footer />
    <FLoatingButton />
    </>
  );
}

export default App;
