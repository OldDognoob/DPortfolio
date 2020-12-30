import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

function CardItem(props) {
  return (
    <div className="cards__item">
      <li className="cards__item">
        <div className="cards__item__link">
          <figure
            className="cards__item__img__wrap"
            data-tech={props.tech}
          >
            <img
              className="cards__item__img"
              src={props.imgSrc}
              alt={props.imgAlt}
            />
          </figure>
          <div className="cards__item__text__wrap">
            <h3 className="cards__item__title">{props.title}</h3>
            <p className="cards__item__info">{props.info}</p>
          </div>
          <div className="cards__link">
            <a href={props.globe}>
              <FontAwesomeIcon icon={faGlobe} size="lg" />
            </a>
            <a href={props.code}>
            <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
          </div>
        </div>
      </li>
    </div>
  );
}

export default CardItem;
