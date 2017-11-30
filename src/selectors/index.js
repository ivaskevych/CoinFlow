import * as R from 'ramda'

export const selectCards = state => state.cards
export const selectActivities = state => state.activities
export const selectActivitiesByDate = (state, cardId, date) => R.pathOr([], [cardId, date], selectActivities(state))
