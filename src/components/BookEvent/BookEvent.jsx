import React, { useState } from "react";
import classes from "../BookEvent/BookEvent.module.css";

import Modal from "../UI/Modal";

import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";

function BookEvent(props) {
  const [enteredEvent, setEnteredEvent] = useState("");
  const [enteredHost, setEnteredHost] = useState("");

  const eventChangeHandler = (e) => {
    setEnteredEvent(e.target.value);
  };
  const hostChangeHandler = (e) => {
    setEnteredHost(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      event: enteredEvent,
      host: enteredHost,
    };

    props.onSend(data);
    console.log(data);

    if (data) {
      navigate("/eventPage");
    }
  };

  const navigate = useNavigate();
  const closeBooking = () => {
    navigate("/");
  };

  const openEventPageHandler = () => {};

  return (
    <Modal>
      <div className={classes.bookEvent}>
        <div className={classes.icon} onClick={closeBooking}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 16 16"
            style={{ cursor: "pointer" }}
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </div>
        <h2>Book Event</h2>
        <form action="" className={classes.form} onSubmit={submitHandler}>
          <div className="row" style={{ rowGap: "2rem" }}>
            <div className="col-sm-12 col-md-6">
              <label htmlFor="eventName">Event Name</label>
              <input type="text" id="eventName" onChange={eventChangeHandler} />
            </div>
            <div className="col-sm-12 col-md-6">
              <label htmlFor="hostName">Host Name</label>
              <input type="text" id="hostName" onChange={hostChangeHandler} />
            </div>

            <div className="col-sm-12 col-md-6">
              <label htmlFor="startTime">Start Time</label>
              <input type="datetime-local" name="" id="startTime" />
            </div>
            <div className="col-sm-12 col-md-6">
              <label htmlFor="endTime">End Time</label>
              <input type="datetime-local" id="endTime" />
            </div>
            <div className="col-sm-12 col-md-6">
              <label htmlFor="location">Location</label>
              <input type="text" id="location" />
            </div>
            <div className="col-sm-12 col-md-6">
              <label htmlFor="photo">Event Photo</label>
              <input type="image" src="" alt="eventPhoto" id="photo" />
            </div>
          </div>
          <Button title="Next" id={classes.formButton} />
        </form>
      </div>
    </Modal>
  );
}

export default BookEvent;
