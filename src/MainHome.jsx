import React from "react";
import Home from "./Home/Home";
import About from "./About/About";
import Feature from "./Feature/Feature";
import Roadmap from "./Roadmap/Roadmap";
import Economics from "./Economics/Economics"
import Partner from "./Partners/Partner";
import Comminities from "./Communities/Comminities";
import Footer from "./Footer/Footer";
import HomeNavbar from "./components/Sheared/Navbar/HomeNavbar";

const MainHome = () => {
  return (
    <>
      <HomeNavbar />
      <Home/>
      <About />
      <Feature />
      <Roadmap />
      <Economics />
      <Partner />
      <Comminities />
      <Footer />
    </>
  );
};

export default MainHome;
