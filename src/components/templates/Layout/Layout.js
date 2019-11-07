import React from "react";
import Navigation from "../../organisms/Navigation/Navigation";
import Footer from "../../organisms/Footer/Footer";

const Layout = (props) => {
  return (
    <>
      <Navigation />
      {props.children}
      <Footer />
    </>
  );
};
export default Layout;
