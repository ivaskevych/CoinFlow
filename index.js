import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import createStore from './src/store'
import Router from './src'

import moment from 'moment' // temporary for example use

const start = Date.now()
// fetch initial data dependencies and render
Promise.all([
// GET DATA FROM FILE
  Promise.resolve({})
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
      type: 'CARD_CREATE',
      card: {
        id: 1,
        name: 'card_1',
        amount: 500,
        currency: 'USD',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    }),
    store.dispatch({
      type: 'CARD_CREATE',
      card: {
        id: 2,
        name: 'card_2',
        amount: 12000,
        currency: 'UAH',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    }),
    store.dispatch({
      type: 'ACTIVITY_CREATE',
      date: moment(new Date()).format('DD/MM/YYYY'),
      activity: {
        id: 1,
        cardId: 2,
        name: 'Activity_1',
        amount: -550,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    }),
    store.dispatch({
      type: 'ACTIVITY_CREATE',
      date: moment(new Date()).format('DD/MM/YYYY'),
      activity: {
        id: 2,
        cardId: 2,
        name: 'Activity_2',
        amount: 320,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    }),
    store.dispatch({
      type: 'ACTIVITY_EDIT',
      date: moment(new Date()).format('DD/MM/YYYY'),
      activity: {
        id: 2,
        cardId: 2,
        name: 'Renamed activity',
        updatedAt: new Date()
      }
    }),
    store.dispatch({
      type: 'CARD_EDIT',
      card: {
        id: 1,
        name: 'Edited_card',
        updatedAt: new Date()
      }
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
