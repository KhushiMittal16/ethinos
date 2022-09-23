import React from "react";
import { ClientPartnerCardWrapper } from "./../styled/AllThreeStyled";
import useViewport from "./../viewport/useViewport";

const ClientPartnerCard = ({ cardVal }) => {
  const { isTablet, isMobile } = useViewport();
  return (
    <ClientPartnerCardWrapper isTablet={isTablet} isMobile={isMobile}>
      {cardVal.map((data, i) => (
        <div className="cardImage" key={i}>
          <img src={data.imgSrc} alt={data.alt} className="imgClass" />
        </div>
      ))}
    </ClientPartnerCardWrapper>
  );
};

export default ClientPartnerCard;
