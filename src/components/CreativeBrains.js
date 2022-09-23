import React from "react";
import {
  CreativeBrainWrapper,
  CreativeBrainMobWrapper,
} from "../styled/CreativeBrainsStyled";
import AllDetails from "./AllDetails";
import useViewport from "./../viewport/useViewport";
import creative from "../assets/videoTop.mp4";
import creativeMob from "../assets/videoMob.mp4";

const CreativeBrains = () => {
  const { isMobile, isTablet } = useViewport();
  return (
    <>
      {!isMobile ? (
        <CreativeBrainWrapper isMobile={isMobile} isTablet={isTablet}>
          <video autoPlay muted loop className="videoStart">
            <source src={creative} type="video/mp4" />
          </video>
          <div className="details">
            <AllDetails
              headVal="Where creative brains meet media and technology"
              descVal="We solve new age problems by developing digital solutions that fit your business."
              otherLink="See our work"
            />
          </div>
        </CreativeBrainWrapper>
      ) : (
        <CreativeBrainMobWrapper isMobile={isMobile} isTablet={isTablet}>
          <video autoPlay muted loop className="videoStart">
            <source src={creativeMob} type="video/mp4" />
          </video>
          <div className="details">
            <AllDetails
              headVal="Where creative brains meet media and technology"
              descVal="We solve new age problems by developing digital solutions that fit your business."
              otherLink="See our work"
            />
          </div>
        </CreativeBrainMobWrapper>
      )}
    </>
  );
};

export default CreativeBrains;
