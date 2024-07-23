import React from "react";

function Cards(prop) {
  return (
    <React.Fragment>
      <div className="card">
        <img
          src={prop.imgsrc}
          alt="John"
          style={{ width: "100%", height: "40%" }}
        />
        <h1>{prop.name}</h1>
        <p className="title">{prop.title}</p>s
        <p>{prop.summery}</p>
        <a href={prop.link} target="_blank">
          <p>
            <button>Contact</button>
          </p>
        </a>
      </div>
    </React.Fragment>
  );
}

export default Cards;