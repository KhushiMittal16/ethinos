import styled from "styled-components";

export const FooterWrapper = styled.div`
  background-color: #222;
  color: #666;
  padding-top: 9.2em;
  padding-bottom: ${({ isTablet }) => (isTablet ? "9em" : "7em")};
  /* z-index: -1;
  position: sticky;
  bottom: 0;
  left: 0; */
`;

export const FooterTopWrapper = styled.div`
  display: flex;
  justify-content: ${({ isTablet, isMobile }) =>
    isMobile ? "center" : "space-between"};
  margin: ${({ isTablet, isMobile }) =>
    isMobile ? "1em" : isTablet ? "0px 3.5em" : "0px 6em"};
`;

export const FooterAddressWrapper = styled.div`
  display: ${({ isMobile }) => (isMobile ? "none" : "")};
  .cardsAll {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    border-bottom: 1px solid #333;
    padding: 10px 0px;
    width: 100%;
  }
  .cardEnd {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 10px 0px;
    width: 100%;
  }

  .placeImg {
    padding-right: 1em;
    display: flex;
    justify-content: center;
  }

  .allImg {
    width: ${({ isTablet }) => (isTablet ? "60%" : "80%")};
  }

  .cityName {
    color: #999;
    margin-bottom: 5px;
    font-size: 1.2em;
  }

  .addressVal {
    font-size: 0.8em;
    margin-bottom: 5px;
  }
`;

export const AllLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #999;
  font-size: 1.2em;

  a {
    text-decoration: none;
    color: #999;
    &:hover {
      color: #ccc;
    }
  }

  .allLinks {
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  .otherInfoLinks {
    margin-right: ${({ isTablet, isMobile }) =>
      isMobile ? "3em" : isTablet ? "3em" : "7em"};
  }

  .privacyVal {
    margin-bottom: 10px;
  }

  .allVal {
    margin-bottom: 10px;
  }

  .socialMedia {
    display: flex;
    justify-content: center;
    margin-top: 3.5em;
    font-size: 0.8em;
  }

  .icons {
    padding: 10px 0.8em;
  }
`;
export const FooterBottomWrapper = styled.div`
  display: flex;
  margin: 3.5em 1em 9px;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #666;
  padding: 2em 0px;
`;
