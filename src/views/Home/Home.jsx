import React from "react";
import Anuncio from "../../components/Anuncio";
import Contact from "../../components/Contact";
import Betslips from "../../components/Betslips";
import LiveHighlights from "../../components/LiveHighlights";
import Upcoming from "../../components/Upcoming";
import Highlights from "../../components/Highlights";
import Menu from "../../components/Menu";
import NavbarLeft from "../../components/NavbarLeft";
import Carousel from "../../components/Carousel";
import style from "./Home.module.css";

function Home() {
  return (
    <div>
      <div className={style.divNavRousel}>
        <div className={style.divNavbarLeft}>
          <NavbarLeft />
        </div>
        <div style={{ width: "100%" }}>
          <div className={style.menuContainer}>
            <Menu />
          </div>
          <div className={style.divCarouHighBets}>
            <div className={style.divCarouHigh}>
              <Carousel />
              <div style={{ marginTop: "20px" }}>
                <div className={style.Highlights}>
                  <Highlights />
                </div>
                <div className={style.Upcoming}>
                  <Upcoming />
                </div>
                <div className={style.LiveHighlights}>
                  <LiveHighlights />
                </div>
              </div>
            </div>
            <div style={{ marginLeft: "20px" }}>
              <Betslips />
              <Contact />
              <Anuncio />
            </div>
          </div>
        </div>
      </div>
      {/* 
      <Routes>
        <Route path="/" element={<Page />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
      {location.pathname !== "/" && <Footer />} */}
    </div>
  );
}

export default Home;
