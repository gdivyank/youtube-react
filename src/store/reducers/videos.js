import {MOST_POPULAR } from '../actions/video';
import {SUCCESS} from '../actions';


export const initialState = {
  mostPopular: {},

};
export default function videos(state = initialState, action) {
  switch (action.type) {
    case MOST_POPULAR[SUCCESS]:
      return reduceFetchMostPopularVideos(action.response, state);
    default:
      return state;
  }
}

function reduceFetchMostPopularVideos(response, prevState) {
  return {
    ...prevState,
    mostPopular : response,
  };
}

/*
*   Selectors
* */
export const getMostPopular = (state) => state.videos.mostPopular;



