import React from "react";
import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";
import { DetailCompWrapper } from "../styled/DetailsStyled";
import useViewport from '../viewport/useViewport';

const AllDetails = ({ title, headVal, descVal,otherLink }) => {
  const { isTablet, isMobile } = useViewport();
  return (
    <DetailCompWrapper isTablet={isTablet} isMobile={isMobile}>
      <div className="titleDiv">
        <div className="title">{title}</div>
        <div className="horLine"></div>
      </div>
      <div className="cardHeading">{headVal}</div>
      <div className="cardDesc">{descVal}</div>
      <Link to="/">
        <div className="seeMore">
          <div className="seeLink">{otherLink}</div>
          <div className="arrow">
            {" "}
            <HiArrowNarrowRight />
          </div>
        </div>
      </Link>
    </DetailCompWrapper>
  );
};

export default AllDetails;
