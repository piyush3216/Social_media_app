import setUserData from './setUserData';

import { combineReducers } from "redux";

const rootReducer = combineReducers ({
    SetTheData:setUserData
})

export default rootReducer;