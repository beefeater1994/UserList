import { combineReducers } from 'redux';
import users from "./users";
import page from "./page";
import profile from "./profile";

const reducers = combineReducers({
    users,
    page,
    profile
});

export default reducers;
