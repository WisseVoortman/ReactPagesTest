// Root Reducer, combines all reducers into one single reducer

import { combineReducers } from 'redux'

import nodesReducer from './nodes'
import linkesReducer from './links'
import datasourceReducer from './datasource'
import testReducer from './test'

//import connectionReducer from './connection'

const appReducer = (history) => combineReducers({
  nodes: nodesReducer,
  links: linkesReducer,
  datasource: datasourceReducer,
  test: testReducer,
})

export default appReducer