import React from "react";
import CardLinks from "../components/CardLinks";
import CardIcons from "../components/CardIcons";
import { IconContext } from "react-icons";

function CardItem(props) {
  return (
    <div className="cards__container">
      <li className="cards__item">
        <a href={props.path} className="cards__item__link">
          <figure
            className="cards__item__img__wrap"
            // data-category={props.category}
            card-icon={props.icons}
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
          <div className="cards__item__link__wrap">
            <CardLinks />
          </div>
          <div className="cards__item__icons__wrap">
            <IconContext.Provider value={{ size: 25 }}>
              <CardIcons />
            </IconContext.Provider>
          </div>
        </a>
      </li>
    </div>
  );
}

export default CardItem;
