import React from 'react'
import PropTypes from 'prop-types'
import { TextInput, View, StyleSheet, Button } from 'react-native'
import CustomModal from '../components/CustomModal'
import Icon from '../components/Icon'

class HomeContainer extends React.Component {
  static navigationOptions = {
    title: 'Home'
  }

  constructor (props) {
    super(props)
    this.state = {
      modalVisible: false
    }
    this.setModalVisible = this.setModalVisible.bind(this)
  }

  setModalVisible (visible) {
    this.setState({modalVisible: visible})
  }

  render () {
    const { navigation: { navigate } } = this.props

    return (
      <View style={styles.container}>
        <Button onPress={() => navigate('Settings')} title='Settings' />
        <Icon
          containerStyle={styles.addButton}
          name='add'
          size={26}
          reverse
          raised
          color='#43A047'
          onPress={() => this.setModalVisible(true)}
        />
        <CustomModal
          modalVisible={this.state.modalVisible}
          setModalVisible={this.setModalVisible}
          onSubmit={() => true}
          hideOnBackdropClick
          title='Add Activity'
        >
          <TextInput />
        </CustomModal>
      </View>
    )
  }
}

HomeContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  })
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  addButton: {
    position: 'absolute',
    right: 10,
    bottom: 10
  }
})

export default HomeContainer
