import axios from "axios";
import config from "../../config/config";

export const getPhotos = (latitude, longitude) => {
  const photosEndpoint = `https://api.instagram.com/v1/media/search?access_token=${config.INSTAGRAM_API_TOKEN}&lat=${
    latitude
  }&lng=${longitude}&distance=3000`;
  return async dispatch => {
    try {
      const photosData = await axios(photosEndpoint);
      const { data: photos } = photosData.data;
      const collection = [];
      let maxCount = 0;
      for (const photo in photos) {
        collection.push(photos[photo]);
        maxCount++;
        if (maxCount >= 6) break;
      }
      return dispatch(
        setPhotos({
          collection
        })
      );
    } catch (e) {
      console.log("Error fetching photos data", e);
    }
  };
};

export const SET_PHOTOS = "SET_PHOTOS";
export const setPhotos = photos => ({
  type: SET_PHOTOS,
  photos
});
