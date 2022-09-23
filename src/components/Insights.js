import React from "react";
import { InsightWrapper } from "../styled/AllThreeStyled";
import AllDetails from "./AllDetails";
import InsightsCard from "./../cards/InsightsCard";
import useViewport from './../viewport/useViewport';

const Insights = () => {
  const { isTablet, isMobile } = useViewport();
  return (
    <InsightWrapper isTablet={isTablet} isMobile={isMobile}>
      <AllDetails
        title="Insights"
        headVal="Sharing our two cents and then some more"
        descVal="We like to stay on top of things and are certain you do too."
        otherLink="See More"
      />
      <InsightsCard />
    </InsightWrapper>
  );
};

export default Insights;
