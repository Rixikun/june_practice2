//combines all reducers into 1 to pass into store

import { combineReducers } from 'redux'

import cakeReducer from './cake/cakeReducers'
import iceCreamReducer from './iceCream/iceCreamReducers'
import cookieReducer from './cookie/cookieReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    cookie: cookieReducer
})

export default rootReducer