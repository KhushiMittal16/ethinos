import React from "react";
import { ViewportContext } from "./index";

const useViewport = () => {
  const { width, height } = React.useContext(ViewportContext);
  const isMobile = 680 > width;
  const isTablet = 1000 > width;

  return { width, height, isMobile, isTablet };
};

export default useViewport;
  