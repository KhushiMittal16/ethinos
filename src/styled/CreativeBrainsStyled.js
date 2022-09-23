import styled from "styled-components";
export const CreativeBrainWrapper = styled.div`
  .videoStart {
    width: 100%;
    margin-bottom: -5px;
  }
  .details {
    position: absolute;
    padding: ${({ isTablet }) => (isTablet ? "5.5em 2em" : "10em 2.4em")};
    top: 0;
    left: 0;
    bottom: 2em;
    width: ${({ isMobile }) => (isMobile ? "90%" : "70%")};
  }

  .horLine {
    height: 0px;
    width: 0px;
    margin-left: 0px;
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

export const CreativeBrainMobWrapper = styled.div`
  .videoStart {
    width: 100%;
    margin-bottom: -5px;
  }
  .details {
    position: absolute;
    padding: ${({ isTablet, isMobile }) =>
      isMobile ? "11em 1em" : isTablet ? "6em 2em" : "10em 2.4em"};
    top: 0;
    left: 0;
    bottom: 2em;
    width: ${({ isMobile }) => (isMobile ? "90%" : "70%")};
  }

  .horLine {
    height: 0px;
    width: 0px;
    margin-left: 0px;
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
