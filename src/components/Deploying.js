import React from "react";
import AllDetails from "./AllDetails";
import { DeployingWrapper } from "./../styled/DeployingStyled";
import useViewport from './../viewport/useViewport';

const Deploying = () => {
  const {isMobile,isTablet}=useViewport()
  return (
    <DeployingWrapper isMobile={isMobile} isTablet={isTablet}>
      <div className="details">
        <AllDetails
          title="What We Do"
          headVal="Deploying data-driven marketing for exceptional insights"
          descVal="We run data-driven marketing programs that redefine business strategies."
          otherLink="Know More"
        />
      </div>
    </DeployingWrapper>
  ); 
};

export default Deploying;
