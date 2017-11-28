import {
  ACTIVITY_CREATE,
  ACTIVITY_DELETE,
  ACTIVITY_EDIT
} from '../actions/activities'

const dataActions = [
  ACTIVITY_CREATE,
  ACTIVITY_DELETE,
  ACTIVITY_EDIT
]

export const getInitialState = () => ({})

function activities (state = getInitialState(), action) {
  if (dataActions.includes(action.type)) {
    return {
      ...state,
      [action.activity.cardId]: byCardId(state[action.activity.cardId] || {}, action)
    }
  }
  return state
}

function byCardId (state, action) {
  if (dataActions.includes(action.type)) {
    return {
      ...state,
      [action.date]: byDate(state[action.date] || [], action)
    }
  }
  return state
}

function byDate (state, action) {
  switch (action.type) {
    case ACTIVITY_CREATE:
      return state.concat(action.activity)
    case ACTIVITY_DELETE:
      return state.filter(card => card.id !== action.activity.id)
    case ACTIVITY_EDIT:
      return [
        ...state.filter(card => card.id !== action.activity.id),
        Object.assign(
          {},
          ...state.filter(card => card.id === action.activity.id),
          action.activity
        )
      ]
    default:
      return state
  }
}

export default activities
