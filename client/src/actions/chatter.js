import axios from "axios";
import config from "../../../config/config";

export const getChatter = (latitude, longitude) => {
  const chatterEndpoint = `/api/chatter/${latitude}/${longitude}`;
  return async dispatch => {
    try {
      const chatterData = await axios(chatterEndpoint);
      const { statuses: collection } = chatterData.data;
      return dispatch(
        setChatter({
          collection
        })
      );
    } catch (e) {
      console.log("Error fetching chatter data", e);
    }
  };
};

export const SET_CHATTER = "SET_CHATTER";
export const setChatter = chatter => ({
  type: SET_CHATTER,
  chatter
});
