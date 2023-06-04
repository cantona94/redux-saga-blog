import { all } from "redux-saga/effects";
import { postWatcher } from "./postSaga";

export function* rootWatcher() {
  yield all([postWatcher()])
}