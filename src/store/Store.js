import {createStore,combineReducers}from 'redux'
import UserReducer from './reducers/UserReducers';
const mainReducer= combineReducers({
    UserReducer
 })
const  store= createStore(mainReducer)
export default store
