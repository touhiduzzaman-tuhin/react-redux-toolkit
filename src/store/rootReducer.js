import { combineReducers } from "redux";
import { authSlice } from "../redux/slice";

export const rootReducer = combineReducers({
    auth : authSlice.reducer
})