import { put, takeEvery, call, delay } from "redux-saga/effects"
import { axiosUsersFromApi } from "../../api/index";
import { LOAD_USER, SET_USER, } from "../actions/user";

function* axiosUserWorker({ payload }) {
  yield delay(500);
  const { userId } = payload;
  console.log(userId)
  const data = yield call(axiosUsersFromApi, userId);
  const users = yield call(() => new Promise(res => res(data)))
  console.log(users)
  yield put({
    type: SET_USER,
    payload: users.data,
  });
}

export function* userWatcher() {
  yield takeEvery(LOAD_USER, axiosUserWorker);
}