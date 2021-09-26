import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
import { API } from "../../config";
import { getCategorySuccess, GET_CATEGORY } from "../actions/category.actions";
import { Category } from "../models/category";
import { returnResponseType } from "./auth.saga";

export interface ResponseGenerator{
    config?:any,
    data?:any,
    headers?:any,
    request?:any,
    status?:number,
    statusText?:string
}
function* handleGetCategory() {
  let response : ResponseGenerator;
  response =  yield axios.get<Category[]>(`${API}/categories`)
  if (response.data) {
    yield put(getCategorySuccess(response.data));
  }
}
export default function* categorySaga() {
  yield takeEvery(GET_CATEGORY, handleGetCategory);
}
