import Header from "../components/Header";
import Footer from "../components/Footer";
import Aside from "../components/Aside";
import RoadmapFe from "../components/Roadmap/RoadmapFe";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Roadmap = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <Header />
      <div className="layout">
        <div className="left-col">
          <Aside />
        </div>
        <div className="right-col" data-aos="fade-up">
          <main>
            <RoadmapFe />
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Roadmap;
