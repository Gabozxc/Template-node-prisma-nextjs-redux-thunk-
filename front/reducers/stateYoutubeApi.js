import {
  DOWNLOADING_DATA,
  DOWNLOADING_DATA_SUCCESS,
  DOWNLOADING_DATA_FAILURE
} from "../types/index";

const initialState = {
  error: false,
  loading: false,
  message: "",
  data: []
};

const stateYoutubeApi = (state = initialState, action) => {
  switch (action.type) {
    case DOWNLOADING_DATA:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case DOWNLOADING_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload
      }
    case DOWNLOADING_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: action.payload
      }
    default:
      return state;
  }
};

export default stateYoutubeApi;
