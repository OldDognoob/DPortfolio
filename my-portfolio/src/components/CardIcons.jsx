import React from "react";
import { DiJavascript1, DiCss3, DiHtml5} from "react-icons/di";

function CardIcon() {
  return (
    <div className="cards__item__icons_wrap">
      <DiJavascript1 color="#f7df1e" />
      <DiCss3 color="#0037fa" />
      <DiHtml5 color="#107634" />
    </div>
  );
}
export default CardIcon;
