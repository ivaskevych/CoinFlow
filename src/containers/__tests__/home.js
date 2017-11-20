import 'react-native'
import React from 'react'
import HomeContainer from '../home'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const navigation = { navigate: jest.fn() }
  const tree = renderer.create(
    <HomeContainer navigation={navigation} />
  )

  expect(tree).toMatchSnapshot()
})
