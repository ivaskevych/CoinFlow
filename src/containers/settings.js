import React from 'react'
import PropTypes from 'prop-types'
import { View, Button } from 'react-native'

class SettingsContainer extends React.Component {
  static navigationOptions = {
    title: 'Settings'
  }

  render () {
    const { navigation: { navigate } } = this.props

    return (
      <View>
        <Button onPress={() => navigate('Home')} title='Home' />
        <Button onPress={() => navigate('Operations')} title='Operations' />
      </View>
    )
  }
}

SettingsContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  })
}

export default SettingsContainer
