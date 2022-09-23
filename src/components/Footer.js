import React from "react";
import {
  FooterWrapper,
  FooterAddressWrapper,
  AllLinksWrapper,
  FooterTopWrapper,
  FooterBottomWrapper,
} from "../styled/FooterStyled";
import { footerData, otherInfoLinks, privacyLinks } from "./../data/FooterData";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaSlideshare,
  FaInstagram,
  FaWordpressSimple,
} from "react-icons/fa";
import useViewport from "../viewport/useViewport";

const Footer = () => {
  const { isTablet, isMobile } = useViewport();
  return (
    <FooterWrapper isTablet={isTablet}>
      <FooterTopWrapper isTablet={isTablet} isMobile={isMobile}>
        <FooterAddressWrapper isTablet={isTablet} isMobile={isMobile}>
          {footerData.map((values, i) => (
            <div className={values.class} key={i}>
              <div className="placeImg">
                <img
                  src={values.imgSrc}
                  alt={values.altVal}
                  className="allImg"
                />
              </div>
              <div className="address">
                <div className="cityName">{values.cityHead}</div>
                <div className="addressVal">
                  <div className="adLine1">{values.ad1}</div>
                  <div className="adLine1">{values.ad2}</div>
                  <div className="adLine1">{values.ad3}</div>
                  <div className="adLine1">{values.ad4}</div>
                </div>
              </div>
            </div>
          ))}
        </FooterAddressWrapper>
        <AllLinksWrapper isTablet={isTablet} isMobile={isMobile}>
          <div className="allLinks">
            <div className="otherInfoLinks">
              {otherInfoLinks.map((v, i) => (
                <div className="allVal" key={i}>
                  <Link to="/">{v.linkVal}</Link>
                </div>
              ))}
            </div>
            <div className="privacyLinks">
              {privacyLinks.map((v, i) => (
                <div className="privacyVal" key={i}>
                  <Link to="/">{v.privacyVal}</Link>
                </div>
              ))}
            </div>
          </div>
          <div className="socialMedia">
            <div className="icons">
              <a href="https://www.facebook.com" target="_blank">
                <FaFacebookF />
              </a>
            </div>
            <div className="icons">
              <a href="https://www.facebook.com" target="_blank">
                <FaTwitter />
              </a>
            </div>
            <div className="icons">
              <a href="https://www.facebook.com" target="_blank">
                <FaLinkedinIn />
              </a>
            </div>
            <div className="icons">
              <a href="https://www.facebook.com" target="_blank">
                <FaSlideshare />
              </a>
            </div>
            <div className="icons">
              <a href="https://www.facebook.com" target="_blank">
                <FaInstagram />
              </a>
            </div>
            <div className="icons">
              <a href="https://www.facebook.com">
                <FaWordpressSimple />
              </a>
            </div>
          </div>
        </AllLinksWrapper>
      </FooterTopWrapper>
      <FooterBottomWrapper>
        <div className="copyright">
          Copyright 2022. All Right Reserved. Ethinos Digital Marketing
        </div>
      </FooterBottomWrapper>
    </FooterWrapper>
  );
};

export default Footer;
