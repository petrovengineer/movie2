import { call, CallEffect, PutEffect, ForkEffect, put, takeEvery } from 'redux-saga/effects'
import {fetchAPI} from './utils/fetchAPI'

type yieldType=CallEffect<any> | PutEffect<any>
type returnType=void

function* fetchMovies(action: any): Generator<yieldType,returnType> {
   try {
      const res = yield call(fetchAPI, action.payload);
      yield put({type: "MOVIES_FETCH_SUCCEEDED", payload: res});
   } catch (e) {
      yield put({type: "MOVIES_FETCH_FAILED", message: e});
   }
}

function* mySaga():Generator<ForkEffect> {
  yield takeEvery("MOVIES_FETCH_REQUESTED", fetchMovies);
}

export default mySaga;