import React from "react";

function BoxModel() {
  return (
    <body>
      <div className=" card card1">
        <div className="icon"></div>
        <h2 className="title">
          FIRST CARD
        </h2>
        <p className="text">
          Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
          Illum quis maxime ipsa
          similique possimus id!
        </p>
        <button className=" btn button-pink">
          sign in
        </button>
      </div>
      <div className="card card2">
        <div className="icon"></div>
        <h2 className="title">
          SECOND TITLE
        </h2>
        <p className="text">
          Lorem, ipsum dolor sit amet
          consectetur adipisicing elit.
          Sint, blanditiis? Commodi
          sapiente magni cum
          reprehenderit!
        </p>
        <button className=" btn button-blue">
          sign in
        </button>
      </div>
    </body>
  );
}

export default BoxModel;
