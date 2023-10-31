import { Image } from "react-bootstrap";
import { BsPatchCheckFill } from "react-icons/bs";
import { CgDarkMode } from "react-icons/Cg";
import ilhamprofile from "../../images/ilhamprofile.jpg";

const HeaderSidebar = () => {
  return (
    <>
      <section className="headerSidebar">
        <div className="container toggle">
          <CgDarkMode />
        </div>
        <Image src={ilhamprofile} roundedCircle />
        <p>
          Muhammad Ilham <BsPatchCheckFill className="iconVerified" />
        </p>
      </section>
    </>
  );
};

export default HeaderSidebar;
