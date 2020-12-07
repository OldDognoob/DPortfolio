import React from "react";

function CardItem(props) {
  return (
    <li className="cards__items">
      <a className="cards__items__link" href={props.path}>
        <figure
          className="cards__item__img__wrap"
          data-category={props.category}
        >
          <img
            className="cards__item__img"
            src={props.imgSrc}
            alt={props.imgAlt}
          />
        </figure>
        <div className="cards__item__img"
        src={props.imgSrc}
        alt={props.imgAlt}
        />
      </a>
    </li>
  );
}
export default CardItem;