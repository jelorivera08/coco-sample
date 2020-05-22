import { createAction, props } from "@ngrx/store";

export const changeSearchKey = createAction(
  "[App Component] SearchKeyChange",
  props<{ payload: string }>()
);
