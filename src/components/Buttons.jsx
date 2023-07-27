import React from "react";
import LoginButton from "./LoginButton";
import style from "./styles/Buttons.module.css";
import { useAuth0 } from "@auth0/auth0-react";

function Buttons() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className={style.divAccount}>
      <div className={style.divRegister} onClick={() => loginWithRedirect()}>
        Register
      </div>
      <div className={style.divForgotten} onClick={() => loginWithRedirect()}>
        Forgotten Password?
      </div>

      <LoginButton />
    </div>
  );
}

export default Buttons;
