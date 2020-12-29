import React from "react";

/*-----Card Item Component---- */
import CardItem from "./CardItem";

/*-----Projects---- */
import wunderlist from "../img/wunderlist.png";
import africaMarket1 from "../img/africaMarket1.png";
import gameOfLife from "../img/gameOfLife.png";
import LambdaDoor from "../img/LambdaDoor.png"

/*-----Card Icon Component---- */
import CardIcon from "../components/CardIcon";

/*-----Components---- */


/*-----Components---- */


/*-----Card Icons Components---- */
// import CardIcons from "../components/CardIcons";
// import CardRicon from "../components/CardRicon";
// import CardRedux from "../components/CardRedux";

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
          imgSrc= {wunderlist}
          imgAlt="wunderlist-img"
          title="Wunderlist 2.0"
          info="A web app list for users to track down their tasks they need to complete."
          cardIcon={CardIcon}
          /> 
          <CardItem
          globe="https://africa-market-place.netlify.app/"
          code="https://github.com/african-market-place"
          imgSrc={africaMarket1}
          imgAlt="africaMarket-img"
          title="Africa Market Place"
          info="A virtual market place for Africa business owners, where they can sell their products."
          cardIcon={CardIcon}
          />
         

          </ul>
          <ul className="cards__items">
           <CardItem
          globe="https://practical-booth-069759.netlify.app/"
          code="https://github.com/OldDognoob/Game-of-life/tree/Dimos-1"
          imgSrc={gameOfLife}
          imgAlt="gameOfLife-img"
          title="The Game of Life"
          info="The Game of life is a small representation of an automaton cellular system,
          a zero player game requiring no further input."
          category={CardIcon}
          />

          <CardItem
          globe="https://lambdadooreuflex.netlify.app/"
          code="https://github.com/Labs-EU-Flex/lambda-door-client"
          imgSrc={LambdaDoor}
          imgAlt="LambdaDoor-png;"
          title="Lambda Door"
          info="Lambda Door is a web portal door for all lambda graduates to explore companies information and gain a competitive advantage to any job quest."
          cardIcon={CardIcon}
          />
        </ul>
      </div>
    </div>
  );
}
export default Cards;