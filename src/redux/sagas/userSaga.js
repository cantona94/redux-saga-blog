import { put, takeEvery, call, delay } from "redux-saga/effects"
import { axiosUserFromApi } from "../../api/index";
import { SET_USER_ERROR } from "../actions/errors";
import { LOAD_USER, SET_USER, } from "../actions/user";

function* axiosUserWorker({ payload }) {
  try {
    yield delay(500);
    const { userId } = payload;
    const data = yield call(axiosUserFromApi, userId);
    const users = yield call(() => new Promise(res => res(data)))
    yield put({
      type: SET_USER,
      payload: users.data,
    });
  } catch {
    yield put({ type: SET_USER_ERROR, payload: 'Error fetching user card' })
  }
}

export function* userWatcher() {
  yield takeEvery(LOAD_USER, axiosUserWorker);
}