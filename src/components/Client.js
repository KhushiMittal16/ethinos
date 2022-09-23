import React from "react";
import AllDetails from "./AllDetails";
import { ClientPartnerWrapper } from "./../styled/AllThreeStyled";
import ClientPartnerCard from "./../cards/ClientPartnerCard";
import { ClientData } from "../data/ClientsData";
import useViewport from "./../viewport/useViewport";

const Client = () => {
  const { isTablet, isMobile } = useViewport();
  return (
    <ClientPartnerWrapper isTablet={isTablet} isMobile={isMobile}>
      <AllDetails
        title="Our Clients"
        headVal="Why marketers love having us for partners"
        descVal="We believe there is little substitute for good ol’ hard work."
        otherLink="See More"
      />
      <ClientPartnerCard cardVal={ClientData} />
    </ClientPartnerWrapper>
  );
};

export default Client;
