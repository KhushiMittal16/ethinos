import React from "react";
import { InsightCardWrapper } from "../styled/AllThreeStyled";
import { insightsData } from "./../data/InsightsData";
import { Link } from "react-router-dom";
import useViewport from "./../viewport/useViewport";

const InsightsCard = () => {
  const { isTablet, isMobile } = useViewport();
  return (
    <InsightCardWrapper isTablet={isTablet} isMobile={isMobile}>
      {insightsData.map((data, i) => (
        <div className="innerCard" key={i}>
          <Link to="/">
            <div className="imgDiv">
              <img src={data.imgVal} alt={data.alt} className="insightImg" />
            </div>
            <div className="blogDate">
              <div className="blog">Blog</div>
              <div className="dateVal">{data.dateVal}</div>
            </div>
            <div className="headDiv">{data.head}</div>
          </Link>
        </div>
      ))}
    </InsightCardWrapper>
  );
};

export default InsightsCard;
