import React from "react";
import CardItem from "./CardItem";
import wunderlist1 from "../img/wunderlist1.png";
import africaMarket1 from "../img/africaMarket1.png";
import gameOfLife from "../img/gameOfLife.png";
import LambdaDoor1 from "../img/LambdaDoor1.png";
import "./cards.css";

function Cards() {
  return (
    <div className="cards">
      <div className="cards__container">
        <ul className="cards__items">
          <CardItem 
          path="https://wunder-list.netlify.app/" 
          category="HTML5, CSS3, LESS, JavaScript"
          imgSrc= {wunderlist1}
          imgAlt="wunderlist-img style=width:auto; height:100%;" 
          title="Wunderlist 2.0" 
          info="A web app list for users to track down their tasks they need to complete." 
          />

          <CardItem 
          path="https://africa-market-place.netlify.app/" 
          category="CSS3, ReactJS, Redux" 
          imgSrc={africaMarket1} 
          imgAlt="africaMarket-img style=width:auto; height:100%;" 
          title="Africa Market Place" 
          info="A virtual market place for Africa business owners, where they can sell their products." 
          />
          </ul>
          <ul className="cards__items">
          <CardItem 
          path="https://practical-booth-069759.netlify.app/" 
          category="CSS3, ReactJS, Redux" 
          imgSrc={gameOfLife} 
          imgAlt="gameOfLife-img" 
          title="The Game of Life" 
          info="The Game of life is a small representation of an automaton cellular system, 
          a zero player game requiring no further input." 
          />

          <CardItem 
          path="https://lambdadooreuflex.netlify.app/" 
          category="ReactJS,Redux" 
          imgSrc={LambdaDoor1} 
          imgAlt="LambdaDoor-png style=width:auto; height:100%;" 
          title="Lambda Door" 
          info="Lambda Door is a web portal door for all lambda graduates to explore companies information and gain a competitive advantage to any job quest." 
          />
        </ul>
      </div>
    </div>
  );
}
export default Cards;
