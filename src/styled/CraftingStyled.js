import styled from "styled-components";
import crafting from "../assets/aiBg.jpeg";
import craftingMob from "../assets/craftingMob.jpeg";
export const CraftingWrapper = styled.div`
  background-repeat: no-repeat;
  background-image:${({ isTablet, isMobile }) =>
    isMobile? `url(${craftingMob})` : `url(${crafting})`} ;
  background-size: cover;
  padding: ${({ isTablet, isMobile }) =>
    isMobile ? "5em 1em" : isTablet ? "5.5em 2em" : "7em 2.4em"};

  .details {
    width: ${({ isMobile }) => (isMobile ? "90%" : "70%")};
  }

  .cardHeading {
    color: #fff !important;
  } 

  .cardDesc {
    color: #fff;
  }

  .seeMore {
    color: #fff;
  }
`;
