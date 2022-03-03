import {combineReducers} from 'redux';
import { productReducter,selectedProductsReducer } from './productReducer';
const reducers = combineReducers({
    allProducts: productReducter,
  product: selectedProductsReducer,
});
export default reducers;