import { combineReducers, createStore } from "redux";
import ProductReducer from "./ProductReducer";
import { devToolsEnhancer } from "redux-devtools-extension";
const root = combineReducers({
  ProductReducer,
});
const store = createStore(root, devToolsEnhancer());
export default store;
