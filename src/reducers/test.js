import * as R from 'ramda'
import {
  TEST_REQUEST,
  TEST_SUCCESS,
  TEST_FAILURE
} from '../actions/test'
import {createDataReducer} from './../utils/reducers'

const dataActions = {
  request: TEST_REQUEST,
  success: TEST_SUCCESS,
  failure: TEST_FAILURE
}

const dateReducer = createDataReducer(dataActions)

export const getInitialState = () => ({})

function test (state = getInitialState(), action) {
  if (R.contains(action.type, R.values(dataActions))) {
    return {
      ...state,
      [action.date]: dateReducer(state[action.date], action)
    }
  }
  return state
}

export default test
