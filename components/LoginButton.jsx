import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./styles/LoginButton.module.css";

function LoginButton() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className={style.divLogin} onClick={() => loginWithRedirect()}>
      Login
    </div>
  );
}

export default LoginButton;
