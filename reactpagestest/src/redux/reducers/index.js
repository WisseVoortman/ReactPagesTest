// Root Reducer, combines all reducers into one single reducer

import { combineReducers } from 'redux'

import nodesReducer from './nodes'
import linkesReducer from './links'

//import connectionReducer from './connection'

const appReducer = combineReducers({
  nodes: nodesReducer,
  links: linkesReducer,
})

export default appReducer