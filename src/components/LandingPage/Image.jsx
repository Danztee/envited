import React from "react";
import img from "../assets/image-1.png";
import Button from "../UI/Button";
import classes from "../LandingPage/MainView.module.css";

function Image() {
  return (
    <>
      <div>
        <img src={img} alt="" className="w-75" />
      </div>

      <div id={classes.imageButton}>
        <Button title="🎉 Create my event" />
      </div>
    </>
  );
}

export default Image;
