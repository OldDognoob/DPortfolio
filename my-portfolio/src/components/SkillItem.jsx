import React, { useState } from "react";
// import "font-awesome/css/font-awesome/min.css";
import "font-awesome/css/font-awesome.min.css";

function SkillItem(props) {
  const [hover, setHover] = useState(false);

  function handleHover() {
    setHover(false);
  }
  function handleMouseOut() {
    setHover(false);
  }
  return (
    <div className="skill__item">
      <figure className="skill__item__img__wrap">
        <i
          className={props.skillIcon}
          onMouseOver={handleHover}
          onMouseOut={handleMouseOut}
          style={{ transform: hover ? "scale(1.5,1.5)" : null }}
        ></i>
      </figure>
      <h6 className="skill__item__title">{props.skillName}</h6>
    </div>
  );
}
export default SkillItem;
