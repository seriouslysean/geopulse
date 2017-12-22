import axios from 'axios';
import config from '../../../config/config';
import { defaultState } from '../reducers/photosReducer';

export const getPhotos = (latitude, longitude) => {
  const photosEndpoint = `https://api.instagram.com/v1/media/search?access_token=${
    config.INSTAGRAM_API_TOKEN
  }&lat=${latitude}&lng=${longitude}&distance=5000&count=6`;
  return async (dispatch) => {
    try {
      const photosData = await axios(photosEndpoint);
      const { data: photos } = photosData.data;
      const collection = [];
      for (const photo in photos) {
        collection.push(photos[photo]);
      }
      return dispatch(setPhotos({
        collection,
      }));
    } catch (e) {
      console.log('Error fetching photos data', e);
    }
  };
};

export const SET_PHOTOS = 'SET_PHOTOS';
export const setPhotos = (photos = defaultState) => ({
  type: SET_PHOTOS,
  photos,
});
