export const ACTIVITY_CREATE = 'ACTIVITY_CREATE'
export const ACTIVITY_DELETE = 'ACTIVITY_DELETE'
export const ACTIVITY_EDIT = 'ACTIVITY_EDIT'

export const activityCreate = ({date, id, cardId, name, amount}) => ({
  type: ACTIVITY_CREATE,
  date,
  activity: {
    id,
    cardId,
    name,
    amount,
    createdAt: new Date(),
    updatedAt: new Date()
  }
})

export const activityDelete = ({id, cardId, date}) => ({
  type: ACTIVITY_DELETE,
  date,
  activity: {
    id,
    cardId
  }
})

export const activityEdit = ({date, id, cardId, name, amount}) => ({
  type: ACTIVITY_CREATE,
  date,
  activity: {
    id,
    cardId,
    name,
    amount,
    updatedAt: new Date()
  }
})
