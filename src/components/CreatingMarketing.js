import React from "react";
import { CreatingWrapper } from "../styled/CreatingStyled";
import useViewport from "../viewport/useViewport";

const CreatingMarketing = () => {
  const { isTablet, isMobile } = useViewport();
  return (
    <CreatingWrapper isTablet={isTablet} isMobile={isMobile}>
      <div className="marketing">
        <div className="headCreating">
          Creating marketing possibilities from the future
        </div>
        <div className="desc">
          We work with today’s leading tools and technologies to create
          future-ready solutions. A whole lot of intelligence topped with a
          dollop of imagination is how we make this happen.
        </div>
      </div>
      <div className="letsTalk">
        <button className="letsTalkBtn">Let's talk</button>
      </div>
    </CreatingWrapper>
  );
};

export default CreatingMarketing;
