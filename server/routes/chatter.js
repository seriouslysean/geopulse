import axios from "axios";
import Twitter from "node-twitter";
import config from "../../config/config";

const twitterSearchClient = new Twitter.SearchClient(
  config.TWITTER_CONSUMER_KEY,
  config.TWITTER_CONSUMER_SECRET,
  config.TWITTER_TOKEN,
  config.TWITTER_TOKEN_SECRET
);

module.exports = app => {
  app.get("/api/chatter/:latitude/:longitude", async (req, res) => {
    const { latitude, longitude } = req.params;
    twitterSearchClient.search(
      { q: "", geocode: `${latitude},${longitude},5km`, lang: "en", count: "4" },
      (error, result) => {
        if (error) {
          res.send({ error });
        }
        if (result) {
          res.send(result);
        }
      }
    );
  });
  app.get("/api/*", (req, res) => {
    res.redirect("/");
  });
};
