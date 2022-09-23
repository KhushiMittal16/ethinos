import styled from "styled-components";
import orchestrating from "../assets/orchesBg.jpeg";
export const OrchestratingWrapper = styled.div`
  background-repeat: no-repeat;
  background-image: url(${orchestrating});
  background-size: cover; 
  padding: ${({ isTablet, isMobile }) =>
    isMobile ? "5em 1em" : isTablet ? "6.5em 2em" : "10em 2.4em"};

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
