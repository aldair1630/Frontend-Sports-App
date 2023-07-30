import React, { useState } from "react";
import style from "./styles/Highlights.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";
import { faTableTennisPaddleBall } from "@fortawesome/free-solid-svg-icons";
import { faBasketball } from "@fortawesome/free-solid-svg-icons";
import { faBaseball } from "@fortawesome/free-solid-svg-icons";
import { faVolleyball } from "@fortawesome/free-solid-svg-icons";
import dartImg from "../assets/img/dart.svg";
import stadiumImg from "../assets/img/footballstadium.png";

function Highlights() {
  const [selectedSport, setSelectedSport] = useState("futbol");

  const handleSportItemClick = (sport) => {
    if (selectedSport === sport) {
      return;
    }

    setSelectedSport(sport);
  };
  return (
    <div className={style.divHighlights}>
      <div className={style.headHighlightContainer}>
        <p style={{ marginLeft: "20px" }}>Highlights</p>
        <p style={{ marginRight: "20px" }}>View Betting</p>
      </div>
      {/* ICONOS DEL HIGHLIGHT */}
      <div className={style.headerHighlightContainer}>
        <div
          className={`${style.highlightsIcons} ${
            selectedSport === "futbol" ? style.selected : ""
          }`}
          onClick={() => handleSportItemClick("futbol")}
        >
          <FontAwesomeIcon icon={faFutbol} />
          <p className={style.pHighlightsIcons}>Futbol</p>
        </div>

        <div
          className={`${style.highlightsIcons} ${
            selectedSport === "tenis" ? style.selected : ""
          }`}
          onClick={() => handleSportItemClick("tenis")}
        >
          <FontAwesomeIcon icon={faTableTennisPaddleBall} />
          <p className={style.pHighlightsIcons}>Tenis</p>
        </div>
        <div
          className={`${style.highlightsIcons} ${
            selectedSport === "basketball" ? style.selected : ""
          }`}
          onClick={() => handleSportItemClick("basketball")}
        >
          <FontAwesomeIcon icon={faBasketball} />
          <p className={style.pHighlightsIcons}>Basketball</p>
        </div>
        <div
          className={`${style.highlightsIcons} ${
            selectedSport === "volleyball" ? style.selected : ""
          }`}
          onClick={() => handleSportItemClick("volleyball")}
        >
          <FontAwesomeIcon icon={faVolleyball} />
          <p className={style.pHighlightsIcons}>Volleyball</p>
        </div>
        <div
          className={`${style.highlightsIcons} ${
            selectedSport === "baseball" ? style.selected : ""
          }`}
          onClick={() => handleSportItemClick("baseball")}
        >
          <FontAwesomeIcon icon={faBaseball} />
          <p className={style.pHighlightsIcons}>Baseball</p>
        </div>
        <div
          className={`${style.highlightsIcons} ${
            selectedSport === "handball" ? style.selected : ""
          }`}
          onClick={() => handleSportItemClick("handball")}
        >
          <FontAwesomeIcon icon={faFutbol} />
          <p className={style.pHighlightsIcons}>Handball</p>
        </div>
        <div
          className={`${style.highlightsIcons} ${
            selectedSport === "darts" ? style.selected : ""
          }`}
          onClick={() => handleSportItemClick("darts")}
        >
          <img src={dartImg} alt={dartImg} style={{ width: "20px" }} />
          <p className={style.pHighlightsIcons}>Darts</p>
        </div>
        <div
          className={`${style.highlightsIcons} ${
            selectedSport === "table-tenis" ? style.selected : ""
          }`}
          onClick={() => handleSportItemClick("table-tenis")}
        >
          <FontAwesomeIcon icon={faTableTennisPaddleBall} />
          <p className={style.pHighlightsIcons}>Table Tenis</p>
        </div>
      </div>
      <div className={style.divDescriptionHighlights}>
        <p className={style.pDescriptionHighlights}>Today</p>
        <p className={style.pDescriptionHighlights}>Doble Chance</p>
      </div>
      <hr className={style.hrHighlights} style={{ color: "rgb(96 102 124)" }} />

      <div className={style.divDescriptionCombHighlights}>
        <p
          className={style.pDescriptionHighlights}
          style={{ marginRight: "47px" }}
        >
          1
        </p>
        <p
          className={style.pDescriptionHighlights}
          style={{ marginRight: "44px" }}
        >
          X
        </p>
        <p
          className={style.pDescriptionHighlights}
          style={{ marginRight: "71px" }}
        >
          2
        </p>
        <p
          className={style.pDescriptionHighlights}
          style={{ marginRight: "39px" }}
        >
          1X
        </p>
        <p
          className={style.pDescriptionHighlights}
          style={{ marginRight: "38px" }}
        >
          12
        </p>
        <p className={style.pDescriptionHighlights}>X2</p>
      </div>

      {/* DATOS DE LOS PARTIDOS */}
      <div className={style.infoHighlights}>
        <p
          className={style.pTimeHighLights}
          style={{ marginLeft: "28px", color: "#ffcd03ff" }}
        >
          20'
        </p>
        <div className={style.infoHighlightsColumn}>
          <p className={style.pTeamHighLights} style={{ marginBottom: "-4px" }}>
            Colombia
          </p>
          <p className={style.pTeamHighLights}>Brazil</p>
        </div>
        <p>
          <img src={stadiumImg} alt={stadiumImg} style={{ width: "20px" }} />
        </p>
        <div className={style.infoHighlightsColumn}>
          <p
            className={style.pScoreHighLigths}
            style={{ marginBottom: "-4px", color: "#ffcd03ff" }}
          >
            1
          </p>
          <p className={style.pScoreHighLigths} style={{ color: "#ffcd03ff" }}>
            2
          </p>
        </div>
        <p>
          <button className={style.firstBtnInfoHighLights}>1</button>
          <button className={style.secondBtnInfoHighLights}>2</button>
          <button className={style.thirdBtnInfoHighLights}>3</button>
        </p>

        <p style={{ marginRight: "16px" }}>
          <button className={style.firstBtnInfoHighLights}>4</button>
          <button className={style.secondBtnInfoHighLights}>5</button>
          <button className={style.thirdBtnInfoHighLights}>6</button>
        </p>
      </div>
    </div>
  );
}

export default Highlights;
