import React from "react";
import CardItem from "./CardItem";
import wunderlist from "../img/wunderlist.png";
import africaMarket from "../img/africaMarket.png"
import "./cards.css";

function Cards() {
  return (
    <div className="cards">
      <div className="cards__container">
        <ul className="cards__items">
          <CardItem 
          path="https://wunder-list.netlify.app/" 
          category="HTML5, CSS3, LESS, JS"
          imgSrc= {wunderlist}
          imgAlt="wunderlist-img" 
          title="Wunderlist 2.0" 
          info="A web app list for users to track down their tasks they need to complete." 
          />

          <CardItem 
          path="https://africa-market-place.netlify.app/" 
          category="CSS3, REACT" 
          imgSrc={africaMarket} 
          imgAlt="africaMarket-img" 
          title="Africa Market Place" 
          info="A virtual market place for Africa business owners, where they can sell their products." 
          />

          <CardItem 
          path="" 
          category="" 
          // imgSrc={} 
          imgAlt="" 
          title="" 
          info="" 
          />

          <CardItem 
          path="" 
          category="" 
          // imgSrc={} 
          imgAlt="" 
          title="" 
          info="" 
          />
        </ul>
      </div>
    </div>
  );
}
export default Cards;
