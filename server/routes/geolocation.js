import axios from "axios";
import { getOriginIp } from "../helpers/originIp";
import geolocationProp from "../../data/fixtures/geolocation";

module.exports = app => {
  app.get("/api/geolocation/:clientIp", async (req, res) => {
    let clientIp = req.params.clientId ? req.params.clientId : getOriginIp(req);

    if (process.env.NODE_ENV === "development") {
      try {
        const data = await axios("http://ifconfig.io/ip");
        clientIp = data.data.replace(/^\s+|\s+$/g, "");
      } catch (error) {
        console.error(error);
      }
    }

    if (clientIp) {
      try {
        const data = await axios(`https://freegeoip.net/json/${clientIp}`);
        console.log(data);
        const { latitude, longitude } = data.data;
        res.send({
          latitude,
          longitude
        });
      } catch (error) {
        console.error(error);
        res.send(geolocationProp);
      }
    } else {
      console.log("Unable to geolocate user, sending default data");
      res.send(geolocationProp);
    }
  });
};
