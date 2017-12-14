import _ from "lodash";

export const getTwitterUserUrl = screen_name => {
  return `https://www.twitter.com/${screen_name}`;
};

export const setupTweetText = tweet => {
  const entities = tweet.entities;
  let toReplace = [];
  let text = tweet.text;

  _.forEach(entities, (value, key) => {
    switch (key) {
      case "hashtags":
        _.each(entities[key], e => {
          toReplace.push({
            start: e.indices[0],
            end: e.indices[1],
            replace: `<a href="https://www.twitter.com/hashtag/${e.text}?src=hash" target="_blank">#${e.text}</a>`
          });
        });
        break;
      case "media":
        _.each(entities[key], e => {
          toReplace.push({
            start: e.indices[0],
            end: e.indices[1],
            replace: ""
          });
        });
        break;
      case "urls":
        _.each(entities[key], e => {
          toReplace.push({
            start: e.indices[0],
            end: e.indices[1],
            replace: `<a href="${e.expanded_url}" target="_blank">${e.display_url}</a>`
          });
        });
        break;
      case "user_mentions":
        _.each(entities[key], e => {
          toReplace.push({
            start: e.indices[0],
            end: e.indices[1],
            replace: `<a href="https://www.twitter.com/${e.screen_name}" target="_blank">@${e.screen_name}</a>`
          });
        });
        break;
    }
  });

  if (toReplace.length) {
    toReplace.sort((a, b) => {
      return b.start - a.start;
    });
    _.each(toReplace, (r, k) => {
      text = text.substring(0, r.start) + r.replace + text.substring(r.end);
    });
  }

  return text;
};
