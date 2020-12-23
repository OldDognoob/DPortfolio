import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faCode } from "@fortawesome/free-solid-svg-icons";

function CardItem(props) {
  return (
   <div className="cards__container">
     <li className="cards__item">
       <a href={props.path} className="cards__item__link">
        
          <figure className="cards__item__img__wrap"
          data-category={props.category}
          >
          < img className="cards__item__img"
          src={props.imgSrc}
          alt={props.imgAlt}
          />
          </figure>
          <div className="cards__item__text__wrap">
          <h3 className="cards__item__title">{props.title}</h3>
          <p className="cards__item__info">{props.info}</p>
        </div>
        {/* <FontAwesomeIcon icon={faGlobe} size="lg"/> */}
        
         </a>
     
     </li>
   </div>
  );
}

export default CardItem;
