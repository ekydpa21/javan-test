import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import productReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";
import logger from "./middleware/logger";

const rootReducer = combineReducers({
  productData: productReducer,
  cartData: cartReducer,
});

let store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
