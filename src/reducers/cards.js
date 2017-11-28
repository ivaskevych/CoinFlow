import {
  CARD_CREATE,
  CARD_DELETE,
  CARD_EDIT
} from '../actions/cards'

export const getInitialState = () => ([])

function cards (state = getInitialState(), action) {
  switch (action.type) {
    case CARD_CREATE:
      return state.concat({
        ...action.card
      })
    case CARD_DELETE:
      return state.filter(card => card.id !== action.card.id)
    case CARD_EDIT:
      return [
        ...state.filter(card => card.id !== action.card.id),
        Object.assign(
          {},
          ...state.filter(card => card.id === action.card.id),
          action.card
        )
      ]
    default:
      return state
  }
}

export default cards
