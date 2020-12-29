import React from "react";
import CardItem from "./CardItem";

//Components
import wunderlist from "../images/wunderlist.png";
import africaMarket from "../images/africaMarket.png";
import LambdaDoor from "../images/LambdaDoor.png";
import gameOfLife from "../images/gameOfLife.png";

// CardLinks Component
import CardLinks from "../components/CardLinks";

// Card-Icons-React-Redux Component
// import CardIcons from "../components/CardIcons";
// import CardRicon from "../components/CardRicon";
// import CardRedux from "../components/CardRedux";



import "./cards.css";

function Cards() {
  return (
    <div className="cards">
      <div className="cards__container">
        <ul className="cards__items">
          <CardItem
            globe="https://wunder-list.netlify.app/"
            code="https://github.com/bw-eu-wunderlust-2-0"
            imgSrc={wunderlist}
            imgAlt="wunderlist-img"
            title="Wunderlist 2.0"
            info="A web app list for users to track down their tasks they need to complete."
            cardIcon={CardLinks}
          />

          <CardItem
            path="https://africa-market-place.netlify.app/"
            code="https://github.com/african-market-place"
            imgSrc={africaMarket}
            imgAlt="africaMarket-img"
            title="Africa Market Place"
            info="A virtual market place for Africa business owners, where they can sell their products."
            card-icon={CardLinks}
          />
        </ul>
        <ul className="cards__items">
          <CardItem
            path="https://practical-booth-069759.netlify.app/"
            code="https://github.com/OldDognoob/Game-of-life/tree/Dimos-1"
            imgSrc={gameOfLife}
            imgAlt="gameOfLife-img"
            title="The Game of Life"
            info="The Game of life is a small representation of an automaton cellular system, 
            a zero player game requiring no further input."
            card-icon={CardLinks}
          />

          <CardItem
            path="https://lambdadooreuflex.netlify.app/"
            code="https://github.com/Labs-EU-Flex/lambda-door-client"
            imgSrc={LambdaDoor}
            imgAlt="LambdaDoor-png;"
            title="Lambda Door"
            info="Lambda Door is a web portal door for all lambda graduates to explore companies information and gain a competitive advantage to any job quest."
            card-icon={CardLinks}
          />
        </ul>
      </div>
    </div>
  );
}
export default Cards;
