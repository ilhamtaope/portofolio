import Header from "../components/Header";
import Footer from "../components/Footer";
import Aside from "../components/Aside";
import MyProject from "../components/Project/MyProject";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Project = () => {
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
            <MyProject />
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Project;
