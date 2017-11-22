import React from 'react'
import PropTypes from 'prop-types'
import { TextInput, View, StyleSheet } from 'react-native'
import CustomModal from '../components/CustomModal'
import Icon from '../components/Icon'
import PopupMenu from '../components/PopupMenu'
class HomeContainer extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state
    return {
      title: 'Home',
      headerRight: <PopupMenu
        actions={['Operations', 'Settings']}
        onPress={params.onPopupEvent}
        style={{marginRight: 10}}
      />
    }
  }

  constructor (props) {
    super(props)
    this.state = {
      modalVisible: false
    }
    this.setModalVisible = this.setModalVisible.bind(this)
    this.onPopupEvent = this.onPopupEvent.bind(this)
  }

  componentDidMount () {
    this.props.navigation.setParams({ onPopupEvent: this.onPopupEvent })
  }

  setModalVisible (visible) {
    this.setState({modalVisible: visible})
  }

  onPopupEvent = (eventName, index) => {
    if (eventName !== 'itemSelected') return
    if (index === 0) this.props.navigation.navigate('Operations')
    else this.props.navigation.navigate('Settings')
  }

  render () {
    return (
      <View style={styles.container}>
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
    navigate: PropTypes.func,
    setParams: PropTypes.func
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
