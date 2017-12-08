import React from "react";
import Location from "../components/Location";
import Weather from "../components/Weather";
import Videos from "../components/Videos";
import Tweets from "../components/Tweets";

const FeedPage = () => (
  <div className="page-feed">
    <Location />
    <Weather />
    <Videos />
    <Tweets />
  </div>
);

export default FeedPage;
