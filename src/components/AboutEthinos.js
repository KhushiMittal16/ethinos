import React from "react";
import { AboutEthinosWrapper, DetailsWrapper } from "../styled/NavMenuStyled";
import useViewport from "./../viewport/useViewport";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaSlideshare,
  FaInstagram,
  FaWordpressSimple,
} from "react-icons/fa";
const AboutEthinos = () => {
  const { isTablet,isMobile } = useViewport();
  return (
    <AboutEthinosWrapper isTablet={isTablet} isMobile={isMobile}>
      {!isMobile ? (
        <DetailsWrapper>
          <div className="ethinosExplain">
            Ethinos is where creative brains meet media and technology. We solve
            new age business problems by deploying the digital solution that
            fits your business.
          </div>
          <div className="getInTouch">
            <div className="getInTouchHead">Get in touch</div>
            <div className="contacts">
              <div className="phoneNo">
                <a href="tel:7303550560">+91 769712836</a>
              </div>
              <div className="email">
                <a href="mailto:info@ethinos.com">info@ethinos.com</a>
              </div>
            </div>
          </div>
        </DetailsWrapper>
      ) : (
        ""
      )}
      <div className="stayConnected">
        <div className="connectHead">Stay Connected</div>
        <div className="socialIcons">
          <div className="icons">
            <a href="/" target="_blank">
              <FaFacebookF />
            </a>
          </div>
          <div className="icons">
            <a href="/" target="_blank">
              <FaTwitter />
            </a>
          </div>
          <div className="icons">
            <a href="/" target="_blank">
              {" "}
              <FaLinkedinIn />
            </a>
          </div>
          <div className="icons">
            <a href="/" target="_blank">
              <FaSlideshare />
            </a>
          </div>
          <div className="icons">
            <a href="/" target="_blank">
              <FaInstagram />
            </a>
          </div>
          <div className="icons">
            <a href="/" target="_blank">
              <FaWordpressSimple />
            </a>
          </div>
        </div>
      </div>
    </AboutEthinosWrapper>
  );
};

export default AboutEthinos;
