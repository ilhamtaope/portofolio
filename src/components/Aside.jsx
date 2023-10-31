import FooterSidebar from "./Aside/FooterSidebar";
import HeaderSidebar from "./Aside/HeaderSidebar";
import Navigation from "./Aside/Navigation";

const Aside = () => {
  return (
    <>
      <aside>
        <HeaderSidebar />
        <hr />
        <Navigation />
        <hr />
        <FooterSidebar />
      </aside>
    </>
  );
};

export default Aside;
