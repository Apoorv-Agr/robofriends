import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((robot, idx) => {
        return <Card key={idx} robotData={robot} />;
      })}
    </div>
  );
};

export default CardList;
