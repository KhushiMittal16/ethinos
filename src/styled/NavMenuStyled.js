import styled from "styled-components";

export const NavMenuWrapper = styled.div`
  position: fixed;
  display: flex;
  height: 100vh;
  flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
  background-color: #111;
  left: 0;
  right: 0;
  top: 0;
  font-size: 18px;
  line-height: 30px;
  color: #666;
  padding: ${({ isMobile }) => (isMobile ? "5em 1em" : "6em 2.5em")};
`;

export const AllNavLinkWrapper = styled.div`
  color: #fff;
  font-size: ${({ isMobile }) => (isMobile ? "1em" : "20px")};
  font-weight: 700;
  width: ${({ isMobile }) => (isMobile ? "96%" : "50%")};

  a {
    text-decoration: none;
    color: #fff;
  }

  .contact {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: ${({ isMobile }) => (isMobile ? "0.7em 0px" : "1em 0px")};
    cursor: pointer;

    &:hover {
      padding: ${({ isMobile }) => (isMobile ? "0.7em" : "20px")};
      border-left: 4px solid #333;  

      background-image: linear-gradient(
        to left,
        transparent,
        transparent 2%,
        #111 2%,
        #000
      );
    }
  }

  .about {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: ${({ isMobile }) => (isMobile ? "0.7em 0px" : "1em 0px")};
    border-bottom: solid 1px #191919;
    cursor: pointer;

    &:hover {
      padding: ${({ isMobile }) => (isMobile ? "0.7em" : "20px")};
      border-left: 4px solid #333;  

      background-image: linear-gradient(
        to left,
        transparent,
        transparent 2%,
        #111 2%,
        #000
      );
    }
  }
`;

export const AboutEthinosWrapper = styled.div`
  padding: ${({ isTablet, isMobile }) =>
    isMobile ? "0px" : isTablet ? "0px 3em" : "0px 5em"};
  width: ${({ isMobile }) => (isMobile ? "100%" : "50%")};
  justify-content: center;
  a {
    text-decoration: none;
    color: #666;
    &:hover {
      color: #fff;
    }
  }

  .socialIcons {
    display: flex;
  }
  .icons {
    padding: 15px;
  }

  .connectHead {
    margin: ${({ isMobile }) =>
      isMobile ? "1.2em 0px 15px" : "1.6em 0px 20px"};
    font-size: 1.7em;
    font-weight: bold;
  }
  .getInTouchHead {
    margin: 1.6em 0px 20px;
    font-size: 1.7em;
    font-weight: bold;
    margin-bottom: 20px;
  }
`;

export const DetailsWrapper = styled.div``;

export const AboutClkWrapper = styled.div`
  color: #fff;
  font-size: ${({ isMobile }) => (isMobile ? "1em" : "20px")};
  font-weight: 700;
  width: ${({ isMobile }) => (isMobile ? "96%" : "50%")};

  .backAbout {
    display: flex;
    cursor: pointer;
    color: #666;
    padding-bottom: 20px;
    font-size: 15px;

    &:hover {
      color: #fff;
    }
  }

  .compHead {
    padding-left: 10px;
    margin-top: -3px;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  .contact {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: ${({ isMobile }) => (isMobile ? "0.7em 0px" : "1em 0px")};
    cursor: pointer;

    &:hover {
      padding: ${({ isMobile }) => (isMobile ? "0.7em" : "20px")};
      border-left: 4px solid #333;  
      background-image: linear-gradient(
        to left,
        transparent,
        transparent 2%,
        #111 2%,
        #000
      );
    }
  }

  .about {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: ${({ isMobile }) => (isMobile ? "0.7em 0px" : "1em 0px")};
    border-bottom: solid 1px #191919;
    cursor: pointer;

    &:hover {
      padding: ${({ isMobile }) => (isMobile ? "0.7em" : "20px")};
      border-left: 4px solid #333;
      background-image: linear-gradient(
        to left,
        transparent,
        transparent 2%,
        #111 2%,
        #000
      );
    }
  }
`;
export const ServiceClkWrapper = styled.div`
  color: #fff;
  font-size: ${({ isMobile }) => (isMobile ? "1em" : "20px")};
  font-weight: 700;
  width: ${({ isMobile }) => (isMobile ? "96%" : "50%")};

  .backAbout {
    display: flex;
    color: #666;
    padding-bottom: 20px;
    cursor: pointer;
    font-size: 15px;

    &:hover {
      color: #fff;
    }
  }

  .compHead {
    padding-left: 10px;
    margin-top: -3px;
  }
  a {
    text-decoration: none;
    color: #fff;
  }

  .contact {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: ${({ isMobile }) => (isMobile ? "0.7em 0px" : "1em 0px")};
    cursor: pointer;

    &:hover {
      padding: ${({ isMobile }) => (isMobile ? "0.7em" : "20px")};
      border-left: 4px solid #333;
      background-image: linear-gradient(
        to left,
        transparent,
        transparent 2%,
        #111 2%,
        #000
      );
    }
  }

  .about {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: ${({ isMobile }) => (isMobile ? "0.7em 0px" : "1em 0px")};  
    border-bottom: solid 1px #191919;
    cursor: pointer;

    &:hover {
      padding: ${({ isMobile }) => (isMobile ? "0.7em" : "20px")};
      border-left: 4px solid #333;
      background-image: linear-gradient(
        to left,
        transparent,
        transparent 2%,
        #111 2%,
        #000
      );
    }
  }
`;
export const InsightClkWrapper = styled.div`
  color: #fff;
  font-size: ${({ isMobile }) => (isMobile ? "1em" : "20px")};
  font-weight: 700;
  width: ${({ isMobile }) => (isMobile ? "96%" : "50%")};

  .backAbout {
    display: flex;
    color: #666;
    padding-bottom: 20px;
    cursor: pointer;
    font-size: 15px;

    &:hover {
      color: #fff;
    }
  }

  .compHead {
    padding-left: 10px;
    margin-top: -3px;
  }
  a {
    text-decoration: none;
    color: #fff;
  }

  .contact {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: ${({ isMobile }) => (isMobile ? "0.7em 0px" : "1em 0px")};
    cursor: pointer;

    &:hover {
      padding: ${({ isMobile }) => (isMobile ? "0.7em" : "20px")};
      border-left: 4px solid #333;
      background-image: linear-gradient(
        to left,
        transparent,
        transparent 2%,
        #111 2%,
        #000
      );
    }
  }

  .about {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: ${({ isMobile }) => (isMobile ? "0.7em 0px" : "1em 0px")};
    border-bottom: solid 1px #191919;
    cursor: pointer;

    &:hover {
      padding: ${({ isMobile }) => (isMobile ? "0.7em" : "20px")};
      border-left: 4px solid #333;
      background-image: linear-gradient(
        to left,
        transparent,
        transparent 2%,
        #111 2%,
        #000
      );
    }
  }
`;
