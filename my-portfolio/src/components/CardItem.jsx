import React from "react";

function CardItem(props) {
  return (
    <li className="cards__item">
      <a className="cards__item__link" href={props.path}>
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
        <div className="cards__item__text__wrap">
          <h3 className="cards__item__title">{props.title}</h3>
          <p className="cards__item__info">{props.info}</p>
        </div>
      </a>
    </li>
  );
}

export default CardItem;
