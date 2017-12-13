import axios from "axios";

module.exports = app => {
  app.get("/api/geolocation", async (req, res) => {
    let clientIp = res.ip;

    if (process.env.NODE_ENV === "development") {
      try {
        const data = await axios("http://ifconfig.io/ip");
        clientIp = data.data.replace(/^\s+|\s+$/g, "");
      } catch (error) {
        console.error(error);
      }
    }

    try {
      const data = await axios(`https://freegeoip.net/json/${clientIp}`);
      const { latitude, longitude } = data.data;
      res.send({
        latitude,
        longitude
      });
    } catch (error) {
      console.error(error);
      res.send({
        latitude: 0,
        longitude: 0
      });
    }
  });
};
