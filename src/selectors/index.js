import * as R from 'ramda'

export const selectActiveDate = (state) => R.pathOr(null, ['config', 'activeDate'], state)
export const selectActiveCardId = (state) => R.pathOr(null, ['config', 'activeCardId'], state)
export const selectCards = state => state.cards
export const selectActivities = state => state.activities
export const selectActivitiesByDate = (state, cardId, date) => R.pathOr([], [cardId, date], selectActivities(state))
