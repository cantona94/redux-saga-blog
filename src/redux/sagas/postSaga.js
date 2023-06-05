import { put, takeEvery, call, delay } from "redux-saga/effects";
import { LOAD_POSTS, SET_POSTS } from "../actions/posts";
import { axiosPostsFromApi } from "../../api/index";

function* axiosPostWorker({ payload }) {
  yield delay(500);
  const { page, limit } = payload;
  const data = yield call(axiosPostsFromApi, page, limit);
  const posts = yield call(() => new Promise(res => res(data)))
  yield put({
    type: SET_POSTS,
    payload: posts,
  });

}

export function* postWatcher() {
  yield takeEvery(LOAD_POSTS, axiosPostWorker)
}