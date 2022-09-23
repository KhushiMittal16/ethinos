import styled from "styled-components";

export const CreatingWrapper = styled.div`
  display: flex;
  align-items: ${({ isTablet, isMobile }) => (isTablet ? "flex-start" : "flex-end")};
  justify-content: center;
  background-color: #0213a9;
  flex-direction: ${({ isTablet, isMobile }) => (isTablet ? "column" : "row")};
  /* ${({ isTablet }) => (isTablet ? "" : "")}; */
  color: #fff;
  padding: ${({ isTablet, isMobile }) => isMobile?"3.1em 1.8em":(isTablet ? "6.2em 8em" : "6.2em 2.8em 9em")}; 

  .marketing{
    padding: ${({ isTablet, isMobile }) => (isTablet ? "0em" : "0px 1em")};
  }

  .headCreating {
    font-size: ${({ isTablet, isMobile }) => (isTablet ? "1.8em" : "3.8em")};
    margin-bottom: 20px;
    font-weight: bolder;
  }

  .desc {
    font-size: ${({ isTablet, isMobile }) => (isTablet ? "1.25em" : "1.1em")};
    padding-right:1em;
  }

  .letsTalk {
    padding: ${({ isTablet, isMobile }) => (isTablet ? "2.5em 0px 0px 0px" : "0px 2em")};
  }

  .letsTalkBtn {
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 1.1em;
    width: 210px;
    padding: 14px 3.6em;

    &:hover {
      background-color: #ff6600;
      transition: 0.5s ease-in-out;
    }
  }
`;
