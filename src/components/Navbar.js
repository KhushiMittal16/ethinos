import React, { useEffect, useState } from "react";
import { NavWrapper, NavScrollWrapper } from "./../styled/NavbarStyled";
import logo from "../assets/logoEthinos.svg";
import { BiMenuAltRight } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import useViewport from './../viewport/useViewport';

const Navbar = ({ btnClick, menuVal }) => {
  const {isMobile}=useViewport()
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {scrollPosition < 150 ? (
        <NavWrapper isMobile={isMobile}>
          <div className="logoDiv">
            <img src={logo} alt="ethinos" className="logoImg" />
          </div>
          <button className="menu" onClick={btnClick}>
            <div className="menuIcon">
              {!menuVal ? <BiMenuAltRight /> : <ImCross />}
            </div>
            <div className="menuTitle">
              ME
              <br />
              NU
            </div>
          </button>
        </NavWrapper>
      ) : (
        <NavScrollWrapper isMobile={isMobile}>
          <div className="logoDiv">
            <img src={logo} alt="ethinos" className="logoImg" />
          </div>
          <button className="menu" onClick={btnClick}>
            <div className="menuIcon">
              {!menuVal ? <BiMenuAltRight /> : <ImCross />}
            </div>
            <div className="menuTitle">
              ME
              <br />
              NU
            </div>
          </button>
        </NavScrollWrapper>
      )}
    </>
  );
};
export default Navbar;
