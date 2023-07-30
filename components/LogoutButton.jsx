import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./styles/LogoutButton.module.css";

function LogoutButton() {
  const { logout } = useAuth0();
  return (
    <div className={style.divLogout} onClick={() => logout()}>
      Logout
    </div>
  );
}

export default LogoutButton;
