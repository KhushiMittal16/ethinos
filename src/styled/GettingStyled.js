import styled from "styled-components";
import getting from "../assets/getteingBg.jpeg";
export const GettingWrapper = styled.div`
  background-repeat: no-repeat;
  background-image: url(${getting});
  background-size: cover;
  padding: ${({ isTablet, isMobile }) =>
    isMobile ? "4em 1em" : isTablet ? "5.5em 2em" : "7em 2.4em"};

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
