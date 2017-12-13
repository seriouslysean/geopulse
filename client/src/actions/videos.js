import axios from "axios";
import config from "../../../config/config";
import { defaultState } from "../reducers/videosReducer";

export const getVideos = (latitude, longitude) => {
  const endpoint = `https://www.googleapis.com/youtube/v3/search?key=${
    config.GOOGLE_API_KEY
  }&type=video&location=${latitude},${longitude}&locationRadius=5km&part=snippet&maxResults=4`;
  return async dispatch => {
    try {
      const data = await axios(endpoint);
      const collection = data.data.items;
      return dispatch(
        setVideos({
          collection
        })
      );
    } catch (e) {
      console.log("Error fetching data", e);
    }
  };
};

export const SET_VIDEOS = "SET_VIDEOS";
export const setVideos = (videos = defaultState) => ({
  type: SET_VIDEOS,
  videos
});
