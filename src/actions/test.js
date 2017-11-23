export const TEST_REQUEST = 'TEST_REQUEST'
export const TEST_SUCCESS = 'TEST_SUCCESS'
export const TEST_FAILURE = 'TEST_FAILURE'

export const fetchTestRequest = date => ({
  type: TEST_REQUEST,
  date
})

export const fetchTestSuccess = (date, data) => ({
  type: TEST_SUCCESS,
  date,
  data
})

export const fetchTestFailure = (date, error) => ({
  type: TEST_FAILURE,
  date,
  error
})

// export const fetchTest = date => dispatch => {
//   dispatch(fetchTestRequest(date))

//   return API
//     .fetchTest(date)
//     .then(
//       data => dispatch(fetchTestSuccess(date, data)),
//       err => dispatch(fetchTestFailure(date, err.message))
//     )
// }
