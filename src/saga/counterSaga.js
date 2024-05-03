import { delay, put, takeEvery } from "redux-saga/effects"
import { INC, Increment } from "../action/counteraction"


export function* incrementAsync() {
    yield delay(1000)
    yield put(INC())
  }
  
  // Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
  export function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
  }