import React from "react";
import { CraftingWrapper } from "../styled/CraftingStyled";
import AllDetails from "./AllDetails";
import useViewport from './../viewport/useViewport';

const Crafting = () => {
  const {isMobile,isTablet}=useViewport()
  return (
    <CraftingWrapper isMobile={isMobile} isTablet={isTablet}>
      <div className="details">
        <AllDetails
          title="What We Do" 
          headVal="Crafting digital marketing that performs, intelligently"
          descVal="We run AI-based media performance programs to meet your business goals."
          otherLink="Know More"
        />
      </div>
    </CraftingWrapper>
  );
};

export default Crafting;
