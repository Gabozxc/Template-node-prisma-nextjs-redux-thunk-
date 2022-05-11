import {
  DOWNLOADING_DATA,
  DOWNLOADING_DATA_SUCCESS,
  DOWNLOADING_DATA_FAILURE
} from "../types/index.js";

export const DownloadUserData = () => {
  return async (dispatch) => {
    dispatch(downloadingData());
    try {
      await fetch("https://rickandmortyapi.com/api/character/1")
        .then(response => response.json())
        .then(data => dispatch(downloadingDataSucess(data)))
    } catch (err) {
      dispatch(downloadingFailure(err.response));
    }
  };
};

const downloadingData = () => ({
  type: DOWNLOADING_DATA,
});

const downloadingDataSucess = (data) => ({
  type: DOWNLOADING_DATA_SUCCESS,
  payload: data,
});

const downloadingFailure = (data) => ({
  type: DOWNLOADING_DATA_FAILURE,
  payload:data,
});
