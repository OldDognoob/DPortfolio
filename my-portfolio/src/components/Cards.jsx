import React from "react";

/*-----Card Item Component---- */
import CardItem from "./CardItem";

/*-----Projects---- */
import wunderlist from "../images/wunderlist.png";
import africaMarket1 from "../images/africaMarket1.png";
import gameOfLife from "../images/gameOfLife.png";
import LambdaDoor from "../images/LambdaDoor.png";

/*-----CSS Style---- */
import "./cards.css";

/*-----Functional Component---- */
function Cards() {
  return (
    <div className="cards">
      <div className="cards__container">
        <ul className="cards__items">
          <CardItem
            globe="https://wunder-list.netlify.app/"
            code="https://github.com/bw-eu-wunderlust-2-0"
            tech="HTML,CSS,JS"
            imgSrc={wunderlist}
            imgAlt="wunderlist-img"
            title="Wunderlist 2.0"
            info="A web app list for users to track down their tasks they need to complete."
          />
          <CardItem
            globe="https://africa-market-place.netlify.app/"
            code="https://github.com/african-market-place"
            tech="React"
            imgSrc={africaMarket1}
            imgAlt="africaMarket-img"
            title="Africa Market Place"
            info="A virtual market place for Africa business owners, where they can sell their products."
          />
        </ul>
        <ul className="cards__items">
          <CardItem
            globe="https://practical-booth-069759.netlify.app/"
            code="https://github.com/OldDognoob/Game-of-life/tree/Dimos-1"
            tech="React"
            imgSrc={gameOfLife}
            imgAlt="gameOfLife-img"
            title="The Game of Life"
            info="The Game of life is a small representation of an automaton cellular system,
          a zero player game requiring no further input."
          />
          <CardItem
            globe="https://lambdadooreuflex.netlify.app/"
            code="https://github.com/Labs-EU-Flex/lambda-door-client"
            tech="React,Redux"
            imgSrc={LambdaDoor}
            imgAlt="LambdaDoor-png"
            title="Lambda Door"
            info="Lambda Door is a web portal door for all lambda graduates to explore companies information and gain a competitive advantage to any job quest."
          />
        </ul>
      </div>
    </div>
  );
}
export default Cards;
