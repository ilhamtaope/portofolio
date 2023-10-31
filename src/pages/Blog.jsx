import Header from "../components/Header";
import Footer from "../components/Footer";
import Aside from "../components/Aside";
import AllBlog from "../components/Blog/AllBlog";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Blog = () => {
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
            <AllBlog />
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Blog;
