import {
  SET_ACTIVE_DATE,
  SET_ACTIVE_CARD_ID
} from '../actions/config'

export const getInitialState = () => ({})

function config (state = getInitialState(), action) {
  switch (action.type) {
    case SET_ACTIVE_DATE:
      return Object.assign({}, state, {activeDate: action.date})
    case SET_ACTIVE_CARD_ID:
      return Object.assign({}, state, {activeCardId: action.id})
    default:
      return state
  }
}

export default config
