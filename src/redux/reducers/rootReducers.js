import {combineReducers} from "redux";
import studentReducer from "./studentReducer";
import loginReducer from "./loginReducer";
import majorClassReducer from "./majorCLassReducer";

const rootReducers = combineReducers({
    student: studentReducer,
    login:loginReducer,
    majorClass:majorClassReducer,
})
export default rootReducers