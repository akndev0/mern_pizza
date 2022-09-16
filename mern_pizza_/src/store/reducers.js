import { combineReducers } from 'redux';
import { authReducer } from './reducers/authReducers';
import { cartReducer } from './reducers/cartReducer';
import { productReducer } from './reducers/productReducer';


export default combineReducers({
  cart: cartReducer,
  auth:authReducer,
  product:productReducer,
 
});