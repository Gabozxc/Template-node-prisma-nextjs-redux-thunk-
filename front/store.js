import {configureStore} from "@reduxjs/toolkit"
import stateYoutubeApi from "./reducers/stateYoutubeApi";

const store = configureStore(
 {
    reducer: {
      youtubeApi: stateYoutubeApi
    }
  }
);

export default store;