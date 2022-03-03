import {combineReducers} from "redux";
import amoutReducer from "./amoutReducer";
const reducers = combineReducers({
    amount: amoutReducer
})
export default reducers