import React from "react";
import Header from "../header";
import Footer from "../footer";
import { withRouter } from "react-router-dom";
const Layout = (props) => {
  //   const { useBreakpoint } = Grid;
  //   const isMobile = !getBreakPoint(useBreakpoint()).includes("lg");
  //   let { location } = props;

  return (
    <>
      <Header />
      {props?.children}
      <Footer />
    </>
  );
};

export default withRouter(Layout);
