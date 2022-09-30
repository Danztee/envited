import React from "react";
import classes from "../EventPage/EventPage.module.css";

function EventView(props) {
  console.log(props);

  return (
    <div className={classes.wrapper}>
      <h1>{props.details.event}</h1>
      <p>Hosted by {props.details.host}</p>

      <div>calender</div>
    </div>
  );
}

export default EventView;
