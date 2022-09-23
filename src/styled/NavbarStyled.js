import styled from "styled-components";
export const NavWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10;
  padding: ${({ isMobile }) => (isMobile ? "10px 1.5em" : "1.2em 2.8em")};
  display: flex;
  justify-content: space-between;

  .logoDiv {
    padding: 0px 1em;
  }

  .logoImg {
    width: 150px;
  }

  .menu {
    text-transform: uppercase;
    font-weight: 700;
    background: transparent;
    border: none;
    color: #fff;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .menuIcon {
    font-size: 2em;
    padding-right: 0.3em;
  }
`;

export const NavScrollWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.7);
  padding: ${({ isMobile }) => (isMobile ? "10px 1.5em" : "10px 2.8em")};
  display: flex;
  justify-content: space-between;

  .logoDiv {
    padding: 0px 1em;
  }

  .logoImg {
    width: 150px;
  }

  .menu {
    text-transform: uppercase;
    font-weight: 700;
    background: transparent;
    border: none;
    color: #fff;
    display: flex;
    cursor: pointer;
    align-items: center;
  }

  .menuIcon {
    font-size: 2em;
    padding-right: 0.3em;
  }
`;
