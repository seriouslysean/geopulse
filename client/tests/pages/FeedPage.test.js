import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { FeedPage } from "../../src/pages/FeedPage";

test("should render FeedPage correctly", () => {
  const getGeolocation = jest.fn().mockReturnValue({
    then: jest.fn().mockReturnValue({
      catch: jest.fn()
    })
  });
  const setGeolocationUnavailable = jest.fn();
  const getWeather = jest.fn();
  const getPhotos = jest.fn();
  const getChatter = jest.fn();
  const getVideos = jest.fn();

  const wrapper = shallow(
    <FeedPage
      getGeolocation={getGeolocation}
      setGeolocationUnavailable={setGeolocationUnavailable}
      getWeather={getWeather}
      getPhotos={getPhotos}
      getChatter={getChatter}
      getVideos={getVideos}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
