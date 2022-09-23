import React from "react";
import AllDetails from "./AllDetails";
import { OrchestratingWrapper } from "./../styled/OrchestratingStyled";

import useViewport from "./../viewport/useViewport";
const Orches = () => {
  const { isMobile, isTablet } = useViewport();
  return (
    <OrchestratingWrapper isMobile={isMobile} isTablet={isTablet}>
      <div className="details">
        <AllDetails
          title="What We Do"
          headVal="Orchestrating all things digital, all things integrated"
          otherLink="Know More"
        />
      </div>
    </OrchestratingWrapper>
  );
};

export default Orches;
