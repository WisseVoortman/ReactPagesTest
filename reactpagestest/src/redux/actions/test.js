import { FETCH_TEST_REQUEST, FETCH_TEST_SUCCESS, FETCH_TEST_FAILURE } from '../actionTypes'
import { thunkCreator } from './utils'

export const fetchTest = () => thunkCreator({
  types: [FETCH_TEST_REQUEST, FETCH_TEST_SUCCESS, FETCH_TEST_FAILURE],
  promise: fetch(`https://www.anapioficeandfire.com/api/books`)
    .then(response => response.json())
})
