import React from "react";
import classes from "../EventPage/EventPage.module.css";

function EventView(props) {
  console.log(props);
  return (
    <div className={classes.wrapper}>
      <h1>Birthday Bash</h1>
      <p>Hosted by Elysia</p>

      <div>calender</div>
    </div>
  );
}

export default EventView;
