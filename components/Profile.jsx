import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "react-json-pretty/themes/monikai.css";
import style from "./styles/Profile.module.css";

function Profile() {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} className={style.img} />
      </div>
    )
  );
}

export default Profile;
