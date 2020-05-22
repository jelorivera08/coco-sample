import { createReducer, on } from "@ngrx/store";
import { changeSearchKey } from "./searchKey.actions";

export const initialState = "";

const _appReducer = createReducer(
  initialState,
  on(changeSearchKey, (state, action) => action.payload)
);

export function appReducer(state, action) {
  return _appReducer(state, action);
}
