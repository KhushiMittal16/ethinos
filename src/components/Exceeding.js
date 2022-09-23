import React from "react";
import {
  ExceedingWrapper,
  ExceedingCardWrapper,
  // ExceedingAllCardMobWrapper,
  ExceedingAllCardWrapper,
  ExceedingCardMobWrapper,
} from "./../styled/ExceedingStyled";
import AllDetails from "./AllDetails";
import { ExceedingData } from "./../data/ExceedingCardData";
import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";
import useViewport from "./../viewport/useViewport";

const Exceeding = () => {
  const { isTablet, isMobile } = useViewport();
  return (
    <ExceedingWrapper isTablet={isTablet} isMobile={isMobile}>
      <div className="details">
        <AllDetails
          title="Our Work"
          headVal="Exceeding business goals, consistently"
          descVal="Delivering your business objectives is our job, overdelivering them is our passion."
          otherLink="See More"
        />
      </div>
      <ExceedingAllCardWrapper isTablet={isTablet} isMobile={isMobile}>
        {ExceedingData.map((data, i) => (
          <div key={i}>
            {!isTablet ? (
              <ExceedingCardWrapper>
                <div className="imgBrandAd">
                  <img src={data.img2} alt={data.altText} className="imgAd" />
                </div>
                <div className="cardDetails">
                  <div className="imgDetails">
                    <div className="imgBrandName">
                      <img
                        src={data.img1}
                        alt={data.altText}
                        className="imgBrand"
                      />
                    </div>
                    <div className="imgDesc">{data.imgDesc}</div>
                  </div>
                  <div className="regDetails">
                    <div className="registration">
                      <div className="countVal">{data.reg}</div>
                      <div className="resDesc">{data.regDesc}</div>
                    </div>
                    <div className="regMin">
                      <div className="countVal">{data.regMin}</div>
                      <div className="resDesc">{data.regMinDesc}</div>
                    </div>
                  </div>
                  <Link to="/">
                    <div className="seeMore">
                      <div className="seeLink">See More</div>
                      <div className="arrow">
                        {" "}
                        <HiArrowNarrowRight />
                      </div>
                    </div>
                  </Link>
                </div>
              </ExceedingCardWrapper>
            ) : (
              <ExceedingCardMobWrapper isMobile={isMobile}>
                <div className="imgDetails">
                  <div className="imgBrandName">
                    <img
                      src={data.img1}
                      alt={data.altText}
                      className="imgBrand"
                    />
                  </div>
                  <div className="imgDesc">{data.imgDesc}</div>
                </div>
                <div className="imgBrandAd">
                  <img src={data.img2} alt={data.altText} className="imgAd" />
                </div>
                <div className="cardDetails">
                  <div className="regDetails">
                    <div className="registration">
                      <div className="countVal">{data.reg}</div>
                      <div className="resDesc">{data.regDesc}</div>
                    </div>
                    <div className="regMin">
                      <div className="countVal">{data.regMin}</div>
                      <div className="resDesc">{data.regMinDesc}</div>
                    </div>
                  </div>
                  <Link to="/">
                    <div className="seeMore">
                      <div className="seeLink">See More</div>
                      <div className="arrow">
                        {" "}
                        <HiArrowNarrowRight />
                      </div>
                    </div>
                  </Link>
                </div>
              </ExceedingCardMobWrapper>
            )}
          </div>
        ))}
      </ExceedingAllCardWrapper>
    </ExceedingWrapper>
  );
};

export default Exceeding;
