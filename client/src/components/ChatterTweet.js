import React from "react";
import { getTwitterUserUrl, getTweetMedia, setupTweetText } from "../helpers/chatter";
import ChatterTweetMedia from "./ChatterTweetMedia";

const ChatterTweet = ({ tweet }) => {
  let originalTweet = {};
  if (tweet.retweeted_status) {
    originalTweet = tweet;
    tweet = tweet.retweeted_status;
  }
  const { id, user: { screen_name } } = tweet;
  return (
    <li className="chatter__status">
      {tweet.entities.media &&
        tweet.entities.media.map(entity => {
          return <ChatterTweetMedia key={entity.id} entity={entity} />;
        })}
      <div className="chatter__text" dangerouslySetInnerHTML={{ __html: setupTweetText(tweet) }} />
      <div className="chatter__details">
        {tweet.retweeted_status && (
          <div className="status__rt">
            RT /{" "}
            <a
              rel="external"
              href={getTwitterUserUrl(originalTweet.user.screen_name)}
              title={`Follow ${originalTweet.user.screen_name} on Twitter`}
              target="_blank"
            >
              @{screen_name}
            </a>
          </div>
        )}
        <div className="status__username">
          <a
            rel="external"
            href={getTwitterUserUrl(screen_name)}
            title={`Follow ${screen_name} on Twitter`}
            target="_blank"
          >
            @{screen_name}
          </a>
        </div>
      </div>
    </li>
  );
};

export default ChatterTweet;
