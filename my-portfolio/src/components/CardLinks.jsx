import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faCode } from "@fortawesome/free-solid-svg-icons";

function CardLinks() {
  return (
    <div className="card__item__link__wrap">
      <FontAwesomeIcon icon={faGlobe} size="lg" />
      <FontAwesomeIcon icon={faCode} size="lg" />
    </div>
  );
}
export default CardLinks;
