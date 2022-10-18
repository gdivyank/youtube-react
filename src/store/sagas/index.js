import {all, call, put, fork} from 'redux-saga/effects';
import {watchMostPopularVideos } from './video';
export default function* () {
  yield all([fork(watchMostPopularVideos)]);
}

/*
* entity must have a success, request and failure method
* request is a function that returns a promise when called
* */
export function* fetchEntity(request, entity, ...args) {
    try {
        if (request.name && request.name.includes('buildMostPopularVideosRequest')) {
            const result = [
                {
                    personalization_id: 42896,
                    video_url:
                        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                    thumbnail_url:
                        "https://rephrase-assets.s3.ap-south-1.amazonaws.com/template_thumbnails/presentation_1.png"
                },
                {
                    personalization_id: 42916,
                    video_url:
                        "https://hosted-rephraseai-videos.s3.us-east-1.amazonaws.com/sales_video/4MbsYhPDbMO8NK6U7XuO6LotH1VW7H/42916.mp4",
                    thumbnail_url:
                        "https://rephrase-assets.s3.ap-south-1.amazonaws.com/template_thumbnails/presentation_1.png"
                },
                {
                    personalization_id: 43077,
                    video_url:
                        "https://hosted-rephraseai-videos.s3.us-east-1.amazonaws.com/sales_video/4MbsYhPDbMO8NK6U7XuO6LotH1VW7H/43077.mp4",
                    thumbnail_url:
                        "https://rephrase-assets.s3.ap-south-1.amazonaws.com/template_thumbnails/presentation_1.png"
                },
                {
                    personalization_id: 43086,
                    video_url:
                        "https://hosted-rephraseai-videos.s3.us-east-1.amazonaws.com/sales_video/4MbsYhPDbMO8NK6U7XuO6LotH1VW7H/43086.mp4",
                    thumbnail_url:
                        "https://rephrase-assets.s3.ap-south-1.amazonaws.com/template_thumbnails/presentation_1.png"
                },
                {
                    personalization_id: 43097,
                    video_url:
                        "https://hosted-rephraseai-videos.s3.us-east-1.amazonaws.com/sales_video/4MbsYhPDbMO8NK6U7XuO6LotH1VW7H/43097.mp4",
                    thumbnail_url:
                        "https://rephrase-assets.s3.ap-south-1.amazonaws.com/template_thumbnails/presentation_1.png"
                },
                {
                    personalization_id: 43098,
                    video_url:
                        "https://hosted-rephraseai-videos.s3.us-east-1.amazonaws.com/sales_video/4MbsYhPDbMO8NK6U7XuO6LotH1VW7H/43098.mp4",
                    thumbnail_url:
                        "https://rephrase-assets.s3.ap-south-1.amazonaws.com/template_thumbnails/presentation_1.png"
                },
                {
                    personalization_id: 43099,
                    video_url:
                        "https://hosted-rephraseai-videos.s3.us-east-1.amazonaws.com/sales_video/4MbsYhPDbMO8NK6U7XuO6LotH1VW7H/43099.mp4",
                    thumbnail_url:
                        "https://rephrase-assets.s3.ap-south-1.amazonaws.com/template_thumbnails/presentation_1.png"
                },
                {
                    personalization_id: 43100,
                    video_url:
                        "https://hosted-rephraseai-videos.s3.us-east-1.amazonaws.com/sales_video/4MbsYhPDbMO8NK6U7XuO6LotH1VW7H/43100.mp4",
                    thumbnail_url:
                        "https://rephrase-assets.s3.ap-south-1.amazonaws.com/template_thumbnails/presentation_1.png"
                },
                {
                    personalization_id: 43101,
                    video_url:
                        "https://hosted-rephraseai-videos.s3.us-east-1.amazonaws.com/sales_video/4MbsYhPDbMO8NK6U7XuO6LotH1VW7H/43101.mp4",
                    thumbnail_url:
                        "https://rephrase-assets.s3.ap-south-1.amazonaws.com/template_thumbnails/presentation_1.png"
                },
                {
                    personalization_id: 43102,
                    video_url:
                        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                    thumbnail_url:
                        "https://rephrase-assets.s3.ap-south-1.amazonaws.com/template_thumbnails/presentation_1.png"
                },
                {
                    personalization_id: 43103,
                    video_url:
                        "https://hosted-rephraseai-videos.s3.us-east-1.amazonaws.com/sales_video/4MbsYhPDbMO8NK6U7XuO6LotH1VW7H/43103.mp4",
                    thumbnail_url:
                        "https://rephrase-assets.s3.ap-south-1.amazonaws.com/template_thumbnails/presentation_1.png"
                },
                {
                    personalization_id: 43104,
                    video_url:
                        "https://hosted-rephraseai-videos.s3.us-east-1.amazonaws.com/sales_video/4MbsYhPDbMO8NK6U7XuO6LotH1VW7H/43104.mp4",
                    thumbnail_url:
                        "https://rephrase-assets.s3.ap-south-1.amazonaws.com/template_thumbnails/presentation_1.png"
                }
            ];
            // we directly return the result object and throw away the headers and the status text here
            // if status and headers are needed, then instead of returning response.result, we have to return just response.
            yield put(entity.success(result, ...args))
        }
        else {
            const response = yield call(request);
            // we directly return the result object and throw away the headers and the status text here
            // if status and headers are needed, then instead of returning response.result, we have to return just response.
            yield put(entity.success(response.result, ...args))
        }
  ;
  } catch (error) {
    yield put(entity.failure(error, ...args));
  }
}

export function ignoreErrors(fn, ...args) {
  return () => {
    const ignoreErrorCallback = (response) => response;
    return fn(...args).then(ignoreErrorCallback, ignoreErrorCallback);
  };
}