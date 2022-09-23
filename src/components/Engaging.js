import React from "react";
import AllDetails from "./AllDetails";
import { EngagingWrapper } from "./../styled/EngagingStyled";
import useViewport from "./../viewport/useViewport";
const Engaging = () => {
  const { isMobile,isTablet } = useViewport();
  return (
    <EngagingWrapper isMobile={isMobile} isTablet={isTablet}>
      <div className="details">
        <AllDetails
          title="What We Do"
          headVal="Engaging your customers everywhere, every time, effectively"
          descVal="We drive omni-channel marketing that results in customer delight and business wins."
          otherLink="Know More"
        />
      </div>
    </EngagingWrapper>
  );
};

export default Engaging;
