import React from "react";
import { withRouter } from "react-router-dom";
const Layout = (props) => {
  //   const { useBreakpoint } = Grid;
  //   const isMobile = !getBreakPoint(useBreakpoint()).includes("lg");
  //   let { location } = props;

  return <>{props?.children}</>;
};

export default withRouter(Layout);
