import React from 'react'
import Icon from './components/Icon'

const Test = () => {
  return <Icon name='add'
    reverse
    color='#43A047'
    onPress={() => console.log('open "Add activity modal"')}
  />
}

export default Test
