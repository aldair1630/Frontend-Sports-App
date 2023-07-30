import React, { useEffect, useState } from "react";
import style from "./styles/Menu.module.css";

function Menu() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Actualizar la hora cada segundo

    return () => {
      clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
    };
  }, []);

  return (
    <div className={style.menuContainer}>
      <div className={style.liAndPMenu}>
        <div className={style.divLiMenu}>
          <p style={{ color: "grey" }}> {currentTime.toLocaleString()}</p>
          <p style={{ paddingLeft: "15px" }}>|</p>
          <li className={style.liMenu}>Help</li>
          <li className={style.liMenu}>Status</li>
          <li className={style.liMenu}>Live Score</li>
          <li className={style.liMenu}>Coupon Check</li>
          <li className={style.liMenu}>Old Desktop</li>
        </div>
        <div style={{ display: "flex" }}>
          <p>|</p>
          <p className={style.pMatchId}>Show Match ID</p>
        </div>
      </div>
      <hr style={{ color: "white", width: "100%" }} />
    </div>
  );
}

export default Menu;
