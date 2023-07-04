import { createStore, applyMiddleware, combineReducers } from "redux";
import fetchReducer from "./redux/reducer/fetchReducer";
import thunk from "redux-thunk";
import selectedPostReducer from "./redux/reducer/selectedPostReducer";

const rootReducer = combineReducers({
   posts: fetchReducer,
   selected: selectedPostReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;