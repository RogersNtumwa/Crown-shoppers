import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reduer";

const middleWares = [logger];

const Store = createStore(rootReducer, applyMiddleware(...middleWares));

export default Store;
