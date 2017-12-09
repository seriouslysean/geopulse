export const locationReducerDefaultState = false;

export default (state = locationReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_LOCATION":
      return {
        ...state,
        latitude: action.latitude,
        longitude: action.longitude
      };
    default:
      return state;
  }
};
