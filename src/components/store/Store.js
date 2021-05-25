import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
//import logger from 'redux-logger'
import { userLoggedInReducer } from './UserLogin'

export const store = createStore(userLoggedInReducer, applyMiddleware(thunk))