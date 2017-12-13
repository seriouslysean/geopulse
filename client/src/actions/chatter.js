import axiosInstance from "../helpers/axiosInstance";
import { defaultState } from "../reducers/chatterReducer";

export const getChatter = (latitude, longitude) => {
  const endpoint = `/api/chatter/${latitude}/${longitude}`;
  return async dispatch => {
    try {
      const data = await axiosInstance.get(endpoint);
      const { statuses: collection } = data.data;
      return dispatch(
        setChatter({
          collection
        })
      );
    } catch (e) {
      console.log("Error fetching data", e);
    }
  };
};

export const SET_CHATTER = "SET_CHATTER";
export const setChatter = (chatter = defaultState) => ({
  type: SET_CHATTER,
  chatter
});
