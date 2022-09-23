import styled from "styled-components";
import exceeding from "../assets/exceedingBG.jpeg";
export const ExceedingWrapper = styled.div`
  background-repeat: no-repeat;
  background-image: url(${exceeding});
  background-size: cover;
  color: #fff;
  display: flex;
  align-items: flex-start;
  flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
  justify-content: center;
  font-size: 1.1em;
  padding: ${({ isMobile }) => (isMobile ? "6em 0.5px" : "6em 2.5em")};
  .cardHeading {
    color: #fff !important;
  }

  .cardDesc {
    color: #fff;
  }

  .seeMore {
    color: #fff;
    width: 50%;
  }
`;

export const ExceedingAllCardWrapper = styled.div``;

export const ExceedingCardWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 2.7em;

  .imgBrandAd {
    width: 20em;
    padding: 0px 0.9em;
    margin-bottom: 1em;
  }
  .imgAd {
    width: 100%;
    border-radius: 5px;
  }

  .imgBrand {
    width: 25%;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  .imgDetails {
    padding: 0px 0.8em;
    margin-bottom: 1.1em;
  }

  .regDetails {
    display: flex;
    align-items: flex-start;
  }

  .countVal {
    color: #fcb616;
    margin-bottom: 5px;
    font-size: 3rem;
    font-weight: 700;
  }

  .registration {
    padding: 0px 1%;
  }
  .regMin {
    padding: 0px 2%;
  }

  .seeMore {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 50px;
    width: 50%;
    margin-top: 1em;
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
    color: #fff;
  }
`;

export const ExceedingCardMobWrapper = styled.div`
  margin-bottom: 2.7em;

  .imgBrandAd {
    width: 17em;
    padding: 0px 0.9em;
    margin-bottom: 1em;
  }
  .imgAd {
    width: 100%;
    border-radius: 5px;
  }

  .imgDesc {
    padding: 0px 1em;
  }

  .imgBrand {
    padding: 0px 10px;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  .imgDetails {
    display: flex;
    padding: 0px 0.8em;
  }

  .regDetails {
    display: flex;
    align-items: flex-start;
  }

  .countVal {
    color: #fcb616;
    margin-bottom: 5px;
    font-size: ${({ isMobile }) => (isMobile ? "2em" : "3rem")};
    font-weight: 700;
  }

  .registration {
    padding: ${({ isMobile }) => (isMobile ? "0px 15px" : "0px 20px")};
  }
  .regMin {
    padding: ${({ isMobile }) => (isMobile ? "0px 15px" : "0px 20px")};
  }

  .seeMore {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 50px;
    width: 50%;
    margin-top: 1em;
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
    color: #fff;
  }
`;
