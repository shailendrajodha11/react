import React from "react";
import "./Cards.css";
import datas from "../../utils/data.js";

const Cards = () => {
  return datas.map((data, index) => (
    <div className="outer">
      <div className="card_container">
      <div class="card_img">
        <img src={data.ImageUrl} alt="CardImage" />
      </div>
      <div class="avatar_img">
        <img src={data.AvatarUrl} alt="AvatarImage" />
      </div>
      <div class="content">
        <p>{data.Content}</p>
      </div>
    </div>
    </div>
  ));
};

export default Cards;
