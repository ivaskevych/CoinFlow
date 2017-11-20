import React from 'react'
import PropTypes from 'prop-types'
import { View, Button } from 'react-native'

class HomeContainer extends React.Component {
  static navigationOptions = {
    title: 'Home'
  }

  render () {
    const { navigation: { navigate } } = this.props

    return (
      <View>
        <Button onPress={() => navigate('Operations')} title='Operations' />
        <Button onPress={() => navigate('Settings')} title='Settings' />
      </View>
    )
  }
}

HomeContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  })
}

export default HomeContainer
