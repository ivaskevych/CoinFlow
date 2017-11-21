import React from 'react'
import {TextInput, View, StyleSheet, Dimensions} from 'react-native'
import CustomModal from './components/CustomModal'
import Icon from './components/Icon'

const window = Dimensions.get('window')
class Test extends React.Component {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  addButton: {
    position: 'absolute',
    right: 10,
    top: window.height - 105
  }
})

export default Test
