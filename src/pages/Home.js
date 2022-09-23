import React, { useState } from "react";
import Client from "../components/Client";
import Insights from "../components/Insights";
import Partner from "../components/Partner";
import CreatingMarketing from "../components/CreatingMarketing";
import Footer from "./../components/Footer";
import Crafting from "../components/Crafting";
import Engaging from "./../components/Engaging";
import Deploying from "./../components/Deploying";
import Getting from "./../components/Getting";
import Orches from "../components/Orches";
import CreativeBrains from "./../components/CreativeBrains";
import Exceeding from "../components/Exceeding";
import Navbar from "./../components/Navbar";
import NavMenu from "./../components/NavMenu";

const Home = () => {
  const [menu, setMenu] = useState(false);
  const menuClk = () => {
    setMenu(!menu);
  };
  return (
    <>
      <Navbar btnClick={menuClk} menuVal={menu} />
      {!menu ? (
        <>
          <CreativeBrains />
          <Crafting />
          <Engaging />
          <Deploying />
          <Getting />
          <Orches />
          <Exceeding />
          <Client />
          <Partner />
          <Insights />
          <CreatingMarketing />
          <Footer />
        </>
      ) : (
        <>
          <NavMenu />
        </>
      )}
    </>
  );
};

export default Home;
