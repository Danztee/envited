import React from "react";
import classes from "../LandingPage/MainView.module.css";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";

function MainView() {
  const navigate = useNavigate();
  const openBooking = (e) => {
    navigate("/BookEvent");
  };

  return (
    <div className={classes.wrapper}>
      <h1>
        Imagine if <span>Snapchat</span> had events.
      </h1>
      <p>
        Easily host and share events with your friends across any social media.
      </p>
      <div id={classes.contentButton}>
        <Button title="🎉 Create my event" onClick={openBooking} />
      </div>
    </div>
  );
}

export default MainView;
