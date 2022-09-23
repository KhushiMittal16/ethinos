import React from "react";
import AllDetails from "./AllDetails";
import { GettingWrapper } from "./../styled/GettingStyled";
import useViewport from './../viewport/useViewport';
const Getting = () => {
  const {isMobile,isTablet}=useViewport()
  return (
    <GettingWrapper isMobile={isMobile} isTablet={isTablet}>
      <div className="details">
        <AllDetails
          title="What We Do"
          headVal="Getting you the right outcome, at the right cost"
          descVal="We sift the B2B marketing funnel expertly to pinpoint relevant decision makers for your business, continually."
          otherLink="Know More"
        />
      </div>
    </GettingWrapper>
  );
};

export default Getting;
