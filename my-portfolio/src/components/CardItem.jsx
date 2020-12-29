import React from "react";
import CardIcons from "../components/CardIcons";
import CardRicon from "../components/CardRicon";
import CardRedux from "../components/CardRedux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faCode } from "@fortawesome/free-solid-svg-icons";

function CardItem(props) {
  return (
    <div className="cards__item">
      <li className="cards__item">
        <div className="cards__item__link">
          <figure
            className="cards__item__img__wrap"
            // data-category={props.category}
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
              <FontAwesomeIcon icon={faCode} size="lg" />
            </a>
            <div className="cards__item__icons__wrap">
            <CardIcons/>
            <CardRicon/>
            <CardRedux/>
          </div>
          </div>
        </div>
      </li>
    </div>
  );
}

export default CardItem;
