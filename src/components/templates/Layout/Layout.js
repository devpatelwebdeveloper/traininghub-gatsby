import React from "react";
import Navigation from "../../organisms/Navigation/NavigationTest";
import Footer from "../../organisms/Footer/Footer";
import ScrollToTop from "../../atoms/ScrollToTop/ScrollToTop";

const Layout = (props) => {
  return (
    <>
      <Navigation />
      {props.children}
      <ScrollToTop />
      <Footer />
    </>
  );
};
export default Layout;
