import * as R from 'ramda'

import createReducer from './createReducer'

const getInitialDataState = () => ({
  loading: false,
  data: null,
  error: null
})

const createDataReducer = ({
  request,
  success,
  failure
}) => createReducer(getInitialDataState(), {
  [request]: state => R.merge(state, {
    loading: true
  }),
  [success]: (state, {data}) => R.merge(state, {
    loading: false,
    error: null,
    data
  }),
  [failure]: (state, {error}) => R.merge(state, {
    loading: false,
    error
  })
})

export default createDataReducer
