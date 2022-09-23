import styled from "styled-components";

export const ClientPartnerWrapper = styled.div`
  display: flex;
  align-items: ${({ isMobile }) => (isMobile ? "center" : "flex-start")};
  flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
  justify-content: center;
  padding: ${({ isTablet, isMobile }) =>
    isMobile ? "2em 1em" : isTablet ? "6em 8%" : "6em 2.26em"};

  .cardHeading {
    color: #222;
  }
`;

export const ClientPartnerCardWrapper = styled.div`
  display: grid;
  grid-template-columns: ${({ isTablet }) =>
    isTablet ? "repeat(2, 1fr)" : "repeat(3, 1fr)"};
  justify-content: center;

  /* width: 55%; */

  .cardImage {
    padding: ${({ isMobile }) => (isMobile ? "0px 0.5em" : "0px 0.95em")};
    margin-bottom: 3.1em;
    display: flex;
    justify-content: center;
  }

  .imgClass {
    width: ${({ isMobile }) => (isMobile ? "70%" : "11em")};
  }
`;

export const InsightWrapper = styled.div`
  display: flex;
  align-items: ${({ isMobile }) => (isMobile ? "center" : "flex-start")};
  flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
  justify-content: center;
  /* padding: 6em 3%; */
  background-color: #f2f2f2;
  padding: ${({ isTablet, isMobile }) =>
    isMobile ? "2em 1em" : isTablet ? "6em 5em" : "6em 2.26em"};
  .cardHeading {
    color: #222;
  }
`;

export const InsightCardWrapper = styled.div`
  display: grid;
  grid-template-columns: ${({ isMobile }) =>
    isMobile ? "repeat(1, 1fr)" : "repeat(2, 1fr)"};
  justify-content: center;
  color: #999999;
  width: ${({ isTablet }) => (isTablet ? "100%" : "")};

  .innerCard {
    padding: 0px 15px;
    margin-bottom: 3.3em;

    a {
      text-decoration: none;
      color: #999999;
    }

    &:hover {
      .imgDiv {
        border: solid 10px #ccc;
      }
    }
  }

  .imgDiv {
    border: solid 10px #f6f6f6;
    margin-bottom: 10px;
    transition: all 0.5s;
    border-radius: 5px;
  }

  .blogDate {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .blog {
    border-right: 1px solid #999999;
    margin-right: 10px;
    padding-right: 10px;
  }

  .insightImg {
    width: 100%;
  }

  .headDiv {
    color: #666;
    font-size: 1.12em;
    margin-bottom: 1.1em;
    font-weight: bold;
  }
`;
