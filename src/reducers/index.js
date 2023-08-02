import userReducer from "./userReducer";
import MapReducer from "./MapReducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  storage,
  whiteList: [""],
  blackList: [""],
};
const rootReducer = combineReducers({
  Map: MapReducer,
  User: userReducer,
});

export default persistReducer(persistConfig, rootReducer);
