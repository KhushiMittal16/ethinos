import styled from "styled-components";
export const DetailCompWrapper = styled.div`
  padding: 0px 0.9em;
  margin-bottom: 3.5em;
  font-family: sans-serif;
  color: #666666;

  .titleDiv {
    display: flex;
    align-items: center;
    font-size: ${({ isTablet }) => (isTablet ? "0.8em" : "1.2em")};
    margin-bottom: 10px;
  }
  .horLine {
    height: 1px;
    width: 2.6em;
    background-color: #666;
    margin-left: 10px;
  }

  .cardHeading {
    font-size: ${({ isTablet }) => (isTablet ? "1.85em" : "3.8em")};
    /* color: #222; */
    margin-bottom: 20px;
    font-weight: bolder;
  }

  .cardDesc {
    font-size: 1.2em;
    margin-bottom: ${({ isMobile, isTablet }) =>
      isMobile ? "0.4em" : "1.4em"};
  }

  .seeMore {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 50px;
    width: ${({ isMobile, isTablet }) =>
      isMobile ? "75%" : isTablet ? "40%" : "30%"};
    &:hover {
      transition: 0.3s ease-in-out;
      background-color: #ff6600;
      color: #fff;
      justify-content: center;
    }
  }
  .seeLink {
    margin-right: 0.5em;
    padding: 15px;
    padding-right: 5px;
  }
  a {
    text-decoration: none;
    color: #666;
  }
`;
