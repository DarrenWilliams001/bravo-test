import React, { useEffect, useState } from "react";
import Event from "../events/Event";
import style from "../events/events.module.css";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(
      "https://87197325.blob.core.windows.net/fed-technical-test/events.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
      });
  }, []);

  console.log(events);
  return (
    <div className={style.eventsContainer}>
      {events.map((event) => (
        <Event
          title={event.title}
          description={event.description}
          desktopImage={event.imgUrlDesktop}
        />
      ))}
    </div>
  );
}

export default Events;
