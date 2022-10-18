import {fork, take, takeEvery, call, all, put} from 'redux-saga/effects';
import * as api from '../api/youtube-api';
import * as videoActions from '../actions/video';
import {REQUEST} from '../actions';
import {fetchEntity} from './index';





export function* fetchMostPopularVideos() {
  const request = api.buildMostPopularVideosRequest.bind(null);
  yield fetchEntity(request, videoActions.mostPopular);
}


export function* watchMostPopularVideos() {
  while (true) {
    //const {amount, loadDescription, nextPageToken} = yield take(videoActions.MOST_POPULAR[REQUEST]);
    yield take(videoActions.MOST_POPULAR[REQUEST]);
    yield fork(fetchMostPopularVideos);
  }
}

