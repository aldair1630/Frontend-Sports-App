import React, { useState } from "react";
import style from "./styles/Navbar.module.css";
import Profile from "./Profile";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import Buttons from "./Buttons";

function Navbar() {
  const { isAuthenticated } = useAuth0();
  const [selectedColor, setSelectedColor] = useState(null);

  const handleItemClick = (color) => {
    // Si el elemento ya está coloreado con el color seleccionado, no hacemos nada al hacer clic
    if (selectedColor === color) {
      return;
    }

    setSelectedColor(color);
  };

  return (
    <div className={style.navbarContainer}>
      <a href="/" alt="logo">
        <h1 className={style.h1Navbar} style={{ color: "white" }}>
          LOGO
        </h1>
      </a>
      <div className={style.divUlNavbar}>
        <ul className={style.ulNavbar}>
          <li
            className={`${style.liNavbar} ${
              selectedColor === "sports" ? style.selected : ""
            }`}
            onClick={() => handleItemClick("sports")}
          >
            Sports
          </li>
          <li
            className={`${style.liNavbar} ${
              selectedColor === "live" ? style.selected : ""
            }`}
            onClick={() => handleItemClick("live")}
          >
            Live
          </li>
          <li
            className={`${style.liNavbar} ${
              selectedColor === "casino" ? style.selected : ""
            }`}
            onClick={() => handleItemClick("casino")}
          >
            Casino
          </li>
          <li
            className={`${style.liNavbar} ${
              selectedColor === "livecasino" ? style.selected : ""
            }`}
            onClick={() => handleItemClick("livecasino")}
          >
            Live Casino
          </li>
          <li
            className={`${style.liNavbar} ${
              selectedColor === "leaguesraces" ? style.selected : ""
            }`}
            onClick={() => handleItemClick("leaguesraces")}
          >
            Leagues&Races
          </li>
          <li
            className={`${style.liNavbar} ${
              selectedColor === "virtual" ? style.selected : ""
            }`}
            onClick={() => handleItemClick("virtual")}
          >
            Virtual
          </li>
          <li
            className={`${style.liNavbar} ${
              selectedColor === "lotto" ? style.selected : ""
            }`}
            onClick={() => handleItemClick("lotto")}
          >
            Lotto
          </li>
          <li
            className={`${style.liNavbar} ${
              selectedColor === "firebets" ? style.selected : ""
            }`}
            onClick={() => handleItemClick("firebets")}
          >
            Firebets
          </li>
          <li
            className={`${style.liNavbar} ${
              selectedColor === "promotions" ? style.selected : ""
            }`}
            onClick={() => handleItemClick("promotions")}
          >
            Promotions
          </li>
        </ul>
        <div className={style.divAccount}>
          <div>{isAuthenticated ? <LogoutButton /> : <Buttons />}</div>
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
