export const SET_ACTIVE_DATE = 'SET_ACTIVE_DATE'
export const SET_ACTIVE_CARD_ID = 'SET_ACTIVE_CARD_ID'

export const setActiveDate = (date) => ({
  type: SET_ACTIVE_DATE,
  date
})

export const setActiveCardId = (id) => ({
  type: SET_ACTIVE_CARD_ID,
  id
})
