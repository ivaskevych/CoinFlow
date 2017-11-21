import React from 'react'
import PropTypes from 'prop-types'
import { View, Button } from 'react-native'

class OperationsListContainer extends React.Component {
  static navigationOptions = {
    title: 'Operations'
  }

  render () {
    const { navigation: { navigate } } = this.props

    return (
      <View>
        <Button onPress={() => navigate('Home')} title='Home' />
        <Button onPress={() => navigate('Settings')} title='Settings' />
      </View>
    )
  }
}

OperationsListContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  })
}

export default OperationsListContainer
