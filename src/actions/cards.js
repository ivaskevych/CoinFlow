export const CARD_CREATE = 'CARD_CREATE'
export const CARD_DELETE = 'CARD_DELETE'
export const CARD_EDIT = 'CARD_EDIT'

export const cardCreate = ({id, name, amount, currency, createdAt, updatedAt}) => ({
  type: CARD_CREATE,
  card: {
    id,
    name,
    amount,
    currency,
    createdAt,
    updatedAt
  }
})

export const cardDelete = (id) => ({
  type: CARD_DELETE,
  card: {
    id
  }
})

export const cardEdit = ({id, name, amount}) => ({
  type: CARD_EDIT,
  card: {
    id,
    name,
    amount,
    updatedAt: new Date()
  }
})
