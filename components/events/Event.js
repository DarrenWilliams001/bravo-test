import React from "react";
import Image from "next/image";
import style from "../events/events.module.css";

function Event(props) {
  return (
    <div className={style.eventContainer}>
      <div
        style={{
          backgroundImage: `url(${props.desktopImage})`,
        }}
        className={style.img}
      ></div>
      <div className={style.info}>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Event;
