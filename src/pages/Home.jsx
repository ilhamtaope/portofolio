import Header from "../components/Header";
import Footer from "../components/Footer";
import Aside from "../components/Aside";
import HeadingHome from "../components/Home/HeadingHome";
import LatestArticle from "../components/Home/LatestArticle";
import Skills from "../components/Home/Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Home = () => {
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
        <div className="right-col">
          <main data-aos="fade-up">
            <HeadingHome />
            <Skills />
            <LatestArticle />
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
