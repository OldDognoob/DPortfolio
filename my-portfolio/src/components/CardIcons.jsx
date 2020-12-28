import React from "react";
import { DiJavascript1, DiCss3, DiHtml5, DiReact } from "react-icons/di";
import { SiRedux } from "react-icons/si";

// import "./styles.css";

function CardIcons() {
  return (
    <div className="cards__item__icons_wrap">
      <DiJavascript1 color="#f7df1e" />
      <DiCss3 color="#0037fa" />
      <DiHtml5 color="#107634" />
      <DiReact color="#61dafb" className="react-icon" />
      <SiRedux color="#e31e1e" />
    </div>
  );
}
export default CardIcons;