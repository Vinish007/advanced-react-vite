
import AboutLan from "../components/About_Lan";
import ContactLan from "../components/Contact";
import FooterLan from "../components/Footer";
import HomeLan from "../components/Home_Lan";
import TestimonialLan from "../components/Testimonial_Lan";
import WorkLan from "../components/Work_Lan";
// import "../assets/css/landing.css";


function Landing() {
  return (
    <div className="App">
      
      <HomeLan/>
      <AboutLan/>
      <WorkLan/>
      <TestimonialLan/>
      <ContactLan/>
      <FooterLan/>
    </div>
  );
}

export default Landing;
