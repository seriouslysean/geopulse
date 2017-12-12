import { SET_WEATHER, setWeather } from "../../src/actions/weather";
import weather from "../../../data/fixtures/weather";

test("should generate setWeather action object", () => {
  const action = setWeather(weather);
  expect(action).toEqual({
    type: SET_WEATHER,
    weather
  });
});
