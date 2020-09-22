import { FETCH_TEST_SUCCESS } from '../actionTypes'

export default function testReducer(state = [
], action) {
  switch (action.type) {
    case FETCH_TEST_SUCCESS: {
      return action.result
    }

    default:
      return state
  }
}