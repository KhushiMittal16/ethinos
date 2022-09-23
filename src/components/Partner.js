import React from "react";
import AllDetails from "./AllDetails";
import { ClientPartnerWrapper } from "./../styled/AllThreeStyled";
import ClientPartnerCard from "./../cards/ClientPartnerCard";
import { PartnersData } from "../data/PartnersData";
import useViewport from './../viewport/useViewport';

const Partner = () => {
  const { isTablet, isMobile } = useViewport();
  return (
    <ClientPartnerWrapper isTablet={isTablet} isMobile={isMobile}>
      <AllDetails
        title="Our Partners"
        headVal="Helping you choose from the best"
        descVal="We work with multiple products so that you don’t have to make tough decisions."
        otherLink="See More"
      />

      <ClientPartnerCard cardVal={PartnersData} />
    </ClientPartnerWrapper>
  );
};

export default Partner;
