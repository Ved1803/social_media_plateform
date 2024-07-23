import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
import Cards from "./Cards";
import Sdata from "./Sdata";

ReactDOM.render(
  <>
    <h1 className="heading_style">List Of Best Plateform </h1>
    <div className="cards-container">
    {Sdata.map((value) => {
      return (
        <Cards
          imgsrc={value.imgsrc}
          name={value.name}
          title={value.title}
          summery={value.Sdata}
          link={value.link}
        />
      );
      })}
    </div>
  </>,
  document.getElementById("root")
);
