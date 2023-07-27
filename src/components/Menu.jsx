import React from "react";
import style from "./styles/Menu.module.css";

function Menu() {
  return (
    <div className={style.menuContainer}>
      <div className={style.liAndPMenu}>
        <div className={style.liMenu}>
          <p style={{ color: "grey" }}> Datetime teams</p>
          <p style={{ paddingLeft: "15px" }}>|</p>
          <li style={{ padding: "0px 10px 0px 15px", color: "aliceblue" }}>
            Help
          </li>
          <li style={{ padding: "0px 10px 0px 10px", color: "aliceblue" }}>
            Status
          </li>
          <li style={{ padding: "0px 10px 0px 10px", color: "aliceblue" }}>
            Live Score
          </li>
          <li style={{ padding: "0px 10px 0px 10px", color: "aliceblue" }}>
            Coupon Check
          </li>
          <li style={{ padding: "0px 10px 0px 10px", color: "aliceblue" }}>
            Old Desktop
          </li>
        </div>
        <div style={{ display: "flex" }}>
          <p>|</p>
          <p
            style={{
              marginRight: "20px",
              marginLeft: "10px",
              color: "aliceblue",
            }}
          >
            Show Match ID
          </p>
        </div>
      </div>
      <hr style={{ color: "white", width: "100%" }} />
    </div>
  );
}

export default Menu;
