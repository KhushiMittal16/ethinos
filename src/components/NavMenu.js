import React from "react";
import {
  NavMenuWrapper,
  AllNavLinkWrapper,
  AboutClkWrapper,
  ServiceClkWrapper,
  InsightClkWrapper,
} from "./../styled/NavMenuStyled";
import { IoIosArrowForward } from "react-icons/io";
import { MdKeyboardArrowLeft } from "react-icons/md";
import AboutEthinos from "./AboutEthinos";
import useViewport from "./../viewport/useViewport";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavMenu = () => {
  const { isMobile } = useViewport();
  const [about, setAbout] = useState(false);
  const [service, setService] = useState(false);
  const [insight, setInsight] = useState(false);

  const aboutClk = () => {
    setAbout(!about);
  };
  const serviceClk = () => {
    setService(!service);
  };
  const insightClk = () => {
    setInsight(!insight);
  };
  return (
    <NavMenuWrapper isMobile={isMobile}>
      {about ? (
        <AboutClkWrapper isMobile={isMobile}>
          <div className="backAbout" onClick={aboutClk}>
            <div className="arrow">
              <MdKeyboardArrowLeft />
            </div>
            <div className="compHead">About us</div>
          </div>
          <Link to="/">
            <div className="about">Our Approach</div>
          </Link>
          <Link to="/">
            <div className="contact">The Team</div>
          </Link>
        </AboutClkWrapper>
      ) : service ? (
        <ServiceClkWrapper isMobile={isMobile}>
          <div className="backAbout" onClick={serviceClk}>
            <div className="arrow">
              <MdKeyboardArrowLeft />
            </div>
            <div className="compHead">service</div>
          </div>
          <Link to="/">
            <div className="about">AI-based Media Performance</div>
          </Link>
          <Link to="/">
            <div className="about">Omni-channel Marketing</div>
          </Link>
          <Link to="/">
            <div className="about">Data-driven marketing</div>
          </Link>
          <Link to="/">
            <div className="about">B2b Marketing</div>
          </Link>
          <Link to="/">
            <div className="contact">Digital Solutions</div>
          </Link>
        </ServiceClkWrapper>
      ) : insight ? (
        <InsightClkWrapper isMobile={isMobile}>
          <div className="backAbout" onClick={insightClk}>
            <div className="arrow">
              <MdKeyboardArrowLeft />
            </div>
            <div className="compHead">insight</div>
          </div>
          <Link to="/">
            <div className="about">Blog</div>
          </Link>
          <Link to="/">
            <div className="about">Reports</div>
          </Link>
          <Link to="/">
            <div className="contact">News</div>
          </Link>
        </InsightClkWrapper>
      ) : (
        <AllNavLinkWrapper isMobile={isMobile}>
          <div className="about" onClick={aboutClk}>
            <div className="aboutUs">About Us</div>
            <div className="arrow">
              <IoIosArrowForward />
            </div>
          </div>
          <div className="about" onClick={serviceClk}>
            <div className="serviceHead">Service</div>
            <div className="arrow">
              <IoIosArrowForward />
            </div>
          </div>
          <Link to="/">
            <div className="about">Showcase</div>
          </Link>
          <div className="about" onClick={insightClk}>
            <div className="insightsHead">Insights</div>
            <div className="arrow">
              <IoIosArrowForward />
            </div>
          </div>
          <Link to="/">
            <div className="about">Clients</div>
          </Link>
          <Link to="/">
            <div className="about">Careers</div>
          </Link>

          <Link to="/">
            <div className="contact">Contact Us</div>
          </Link>
        </AllNavLinkWrapper>
      )}
      <AboutEthinos />
    </NavMenuWrapper>
  );
};

export default NavMenu;
