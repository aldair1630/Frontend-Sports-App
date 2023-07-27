import React from "react";
import { Link } from "react-router-dom";
import style from "./Page.module.css";

function Page() {
  return (
    <div className={style.image}>
      <Link to="/home" className={style.page}>
        Home
      </Link>
    </div>
  );
}

export default Page;
