import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import createStore from './src/store'
import Router from './src'

const start = Date.now()
// fetch initial data dependencies and render
Promise.all([
// GET DATA FROM FILE
  Promise.resolve({
    test: {
      '21/11/2017': {
        loading: false,
        data: {test: 'initialStateValue'},
        error: null
      }
    }
  })
// load external data
// or initial state
])
  .then((result) => {
    let initialState // or populate from loaded data

    if (result.length) {
      initialState = result[0]
    } else {
      initialState = {}
    }

    return createStore(initialState)
  })
  .then(store => Promise.all([
    store,
    // dispatch initial actions on store
    // store.dispatch( some action )
    store.dispatch({
      type: 'TEST_REQUEST',
      date: '23/11/2017'
    }),
    store.dispatch({
      type: 'TEST_SUCCESS',
      date: '23/11/2017',
      data: {test: 'valueAsActionResult'}
    })
  ]))
  .then(([store]) => {
    const App = () =>
      <Provider store={store}>
        <Router />
      </Provider>
    AppRegistry.registerComponent('CoinFlow', () => App)
  }).then(() => {
    if (__DEV__) {
      console.log(`initial render after ${(Date.now() - start).toFixed(3)}ms`)
    }
  })
