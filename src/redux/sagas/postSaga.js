import { put, takeEvery, call, delay } from "redux-saga/effects";
import { LOAD_POSTS, SET_POSTS } from "../reducers/posts/actions";
import { axiosPostsFromApi } from "../../api/index";

function* axiosPostWorker() {
  yield delay(500);
  const data = yield call(axiosPostsFromApi);
  const posts = yield call(() => new Promise(res => res(data)))
  yield put({
    type: SET_POSTS,
    payload: posts,
  });

}

export function* postWatcher() {
  yield takeEvery(LOAD_POSTS, axiosPostWorker)
}