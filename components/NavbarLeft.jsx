import React, { useState } from "react";
import style from "./styles/NavbarLeft.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";
import { faStream } from "@fortawesome/free-solid-svg-icons";
import { faTableTennisPaddleBall } from "@fortawesome/free-solid-svg-icons";
import { faFlagCheckered } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import Accordions from "./Accordions";

function NavbarLeft() {
  const [selectedTime, setSelectedTime] = useState("today");

  const handleTimeItemClick = (time) => {
    if (selectedTime === time) {
      return;
    }

    setSelectedTime(time);
  };
  return (
    <div className={style.navbarLeftContainer}>
      <div className={style.campeonatosAndInput}>
        <input
          type="text"
          placeholder="Search for events, teams, league"
          className={style.inputNavbarLeft}
        />
        <ul className={style.ulNavbarLeft}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FontAwesomeIcon
              icon={faStream}
              style={{ margin: " 0px 5px 0px 1px" }}
            />
            <li className={style.liNavbarLeft}>Live Betting</li>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FontAwesomeIcon icon={faFutbol} style={{ marginRight: "5px" }} />
            <li className={style.liNavbarLeft}>UEFA Super Cup</li>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FontAwesomeIcon icon={faFutbol} style={{ marginRight: "5px" }} />
            <li className={style.liNavbarLeft}>England Premier league</li>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FontAwesomeIcon icon={faFutbol} style={{ marginRight: "5px" }} />
            <li className={style.liNavbarLeft}>Copa Libertadores</li>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FontAwesomeIcon icon={faFutbol} style={{ marginRight: "5px" }} />
            <li className={style.liNavbarLeft}>Copa Sudamericana</li>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FontAwesomeIcon icon={faFutbol} style={{ marginRight: "5px" }} />
            <li className={style.liNavbarLeft}>England Championship</li>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FontAwesomeIcon icon={faFutbol} style={{ marginRight: "5px" }} />
            <li className={style.liNavbarLeft}>FIFA Women's World Cup</li>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FontAwesomeIcon icon={faFutbol} style={{ marginRight: "5px" }} />
            <li className={style.liNavbarLeft}>
              UEFA U21 European Championship
            </li>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FontAwesomeIcon icon={faFutbol} style={{ marginRight: "5px" }} />
            <li className={style.liNavbarLeft}>Germany Supercup</li>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FontAwesomeIcon
              icon={faTableTennisPaddleBall}
              style={{ margin: "0px 5px 0px -2px" }}
            />
            <li className={style.liNavbarLeft}>ATP/WTA</li>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FontAwesomeIcon
              icon={faFlagCheckered}
              style={{ marginRight: "5px" }}
            />
            <li className={style.liNavbarLeft}>F1 - Austrian Grand Prix</li>
          </div>
        </ul>
        <br />

        <div className={style.timeNavbarLeft}>
          <p>
            <FontAwesomeIcon icon={faClock} />
          </p>
          <p
            className={`${style.timeItem} ${
              selectedTime === "today" ? style.selected : ""
            }`}
            onClick={() => handleTimeItemClick("today")}
          >
            TODAY
          </p>
          <p
            className={`${style.timeItem} ${
              selectedTime === "3H" ? style.selected : ""
            }`}
            onClick={() => handleTimeItemClick("3H")}
          >
            3H
          </p>
          <p
            className={`${style.timeItem} ${
              selectedTime === "24H" ? style.selected : ""
            }`}
            onClick={() => handleTimeItemClick("24H")}
          >
            24H
          </p>
          <p
            className={`${style.timeItem} ${
              selectedTime === "72H" ? style.selected : ""
            }`}
            onClick={() => handleTimeItemClick("72H")}
          >
            72H
          </p>
          <p
            className={`${style.timeItem} ${
              selectedTime === "all" ? style.selected : ""
            }`}
            onClick={() => handleTimeItemClick("all")}
          >
            ALL
          </p>
        </div>

        {/* START ACORDION */}

        <Accordions />
      </div>
    </div>
  );
}

export default NavbarLeft;
