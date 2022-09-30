import "./App.css";
import Image from "./components/LandingPage/Image";
import MainView from "./components/LandingPage/MainView";
import BookEvent from "./components/BookEvent/BookEvent";
import ImageEvent from "./components/EventPage/Image";
import EventView from "./components/EventPage/EventView";

import { useState } from "react";

import { Routes, Route } from "react-router-dom";

function App() {
  const [details, setDetails] = useState();

  const detailsGetter = (data) => {
    setDetails(data);
  };
  return (
    <>
      <Routes>
        <Route
          path="/bookEvent"
          element={<BookEvent onSend={detailsGetter} />}
        />
      </Routes>

      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <div className="row">
                <div className="col-md-5 order-md-2" id="content">
                  <MainView />
                </div>
                <div className="col-md-7 order-md-1" id="picture">
                  <Image />
                </div>
              </div>
            </div>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/eventPage"
          element={
            <div className="container">
              <div className="row" id="event-row">
                <div className="col-md-5 order-md-2" id="eventContent">
                  <ImageEvent />
                </div>
                <div className="col-md-7 order-md-1" id="eventPicture">
                  <EventView details={details} />
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
