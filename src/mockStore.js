import moment from 'moment'

const mockStore = {
  cards: [
    {
      id: 'e435d915-969b-4913-a5b1-56bc368dfcb3',
      name: 'card_1',
      amount: 500,
      currency: 'USD',
      createdAt: 1511956715531,
      updatedAt: 1511956715531
    },
    {
      id: 'd88c8cd2-eeaa-46b4-b727-953d6697431f',
      name: 'card_2',
      amount: 12000,
      currency: 'UAH',
      createdAt: 1511956761298,
      updatedAt: 1511956761298
    }
  ],
  activities: {
    'e435d915-969b-4913-a5b1-56bc368dfcb3': {
      '29-11-2017': [
        {
          id: 'ecc3dd4b-d8d3-408c-afbc-0490ae2b9e05',
          cardId: 'e435d915-969b-4913-a5b1-56bc368dfcb3',
          name: 'Card_1 Activity_1',
          amount: 25,
          createdAt: 1511956929417,
          updatedAt: 1511956929417
        },
        {
          id: '1a7334ea-5069-4776-82f7-f35f85919759',
          cardId: 'e435d915-969b-4913-a5b1-56bc368dfcb3',
          name: 'Card_1 Activity_2',
          amount: -47,
          createdAt: 1511957072552,
          updatedAt: 1511957072552
        }
      ]
    },
    'd88c8cd2-eeaa-46b4-b727-953d6697431f': {
      '29-11-2017': [
        {
          id: '048d4768-9e18-43e4-b5e9-8d10eb4770e5',
          cardId: 'd88c8cd2-eeaa-46b4-b727-953d6697431f',
          name: 'Card_2 Activity_1',
          amount: 350,
          createdAt: 1511957063216,
          updatedAt: 1511957063216
        },
        {
          id: '2ecbf4c8-3d59-4ea4-8874-ad1f8a369ebb',
          cardId: 'd88c8cd2-eeaa-46b4-b727-953d6697431f',
          name: 'Card_2 Activity_2',
          amount: -550,
          createdAt: 1511957078584,
          updatedAt: 1511957078584
        },
        {
          id: '0619f955-2597-40fb-9cb1-c4d8fb11e580',
          cardId: 'd88c8cd2-eeaa-46b4-b727-953d6697431f',
          name: 'Card_2 Activity_2',
          amount: 3700,
          createdAt: 1511957084800,
          updatedAt: 1511957084800
        }
      ],
      [moment(new Date()).format('DD-MM-YYYY')]: [
        {
          id: '66667686868686868687687687687',
          cardId: 'd88c8cd2-eeaa-46b4-b727-953d6697431f',
          name: 'New Card From action',
          amount: 888,
          createdAt: 1511957063500,
          updatedAt: 1511957063500
        }
      ]
    }
  }
}

export default mockStore
