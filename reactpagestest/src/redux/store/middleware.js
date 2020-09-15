import { applyMiddleware } from 'redux'

const ReduxThunk = require('redux-thunk').default



const middleware = applyMiddleware(ReduxThunk)

export default middleware