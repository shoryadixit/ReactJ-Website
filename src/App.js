import React from "react";
import NavBar from "./components/NavBar.js";
import './App.css';
import Container from '@mui/material/Container';
import Banner from "./components/Banner";
import BannerNext from "./components/BannerNext.js";
import Work from "./components/Work.js";
import Partners from "./components/Partners.js";
import Testimonials from "./components/Testimonials";
import FooterOne from "./components/FooterOne.js";
import FooterTwo from "./components/FooterTwo.js";

function App() {
  return (
    <Container maxWidth="xl">
      <NavBar />
      <Banner/>
      <BannerNext />
      <Work />
      <Partners />
      <Testimonials />
      <FooterOne />
      <FooterTwo />
    </Container>
  );
}

export default App;
