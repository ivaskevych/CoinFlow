import PropTypes from 'prop-types'
import React from 'react'
import {
  Modal,
  Text,
  View,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native'

class CustomModal extends React.Component {
  render () {
    return (
      <Modal
        animationType='fade'
        transparent
        visible={this.props.modalVisible}
        onRequestClose={() => this.props.setModalVisible(false)}
      >
        <TouchableWithoutFeedback
          style={styles.backdrop}
          onPress={
            () => this.props.hideOnBackdropClick
              ? this.props.setModalVisible(false)
              : null
          }
        >
          <View style={styles.backdrop}>
            <TouchableWithoutFeedback onPress={() => null}>
              <View style={styles.container}>
                {this.props.title && <Text style={styles.title}>{this.props.title}</Text>}
                {this.props.children}
                <View style={styles.buttonGroup}>
                  <TouchableNativeFeedback
                    onPress={() => this.props.setModalVisible(false)}
                    background={TouchableNativeFeedback.SelectableBackground()}
                  >
                    <View style={styles.button}>
                      <Text style={styles.text}>{this.props.closeText}</Text>
                    </View>
                  </TouchableNativeFeedback>
                  {this.props.onSubmit &&
                    <TouchableNativeFeedback
                      onPress={this.props.onSubmit}
                      background={TouchableNativeFeedback.SelectableBackground()}
                    >
                      <View style={styles.button}>
                        <Text style={[styles.text, {color: '#81c784'}]}>{this.props.saveText}</Text>
                      </View>
                    </TouchableNativeFeedback>
                  }
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center'
  },
  container: {
    backgroundColor: '#fff',
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 5,
    marginRight: 25,
    marginLeft: 25,
    borderRadius: 2
  },
  title: {
    color: '#424242',
    textAlign: 'left',
    marginBottom: 5,
    fontWeight: '700'
  },
  text: {
    color: '#ccc',
    textAlign: 'center',
    padding: 8,
    fontWeight: '500'
  },
  button: {
    backgroundColor: '#fff',
    margin: 5
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
})

CustomModal.propTypes = {
  modalVisible: PropTypes.bool.isRequired,
  setModalVisible: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
  children: PropTypes.node,
  closeText: PropTypes.string,
  saveText: PropTypes.string,
  title: PropTypes.string,
  hideOnBackdropClick: PropTypes.bool
}

CustomModal.defaultProps = {
  closeText: 'CLOSE',
  saveText: 'SAVE',
  onSubmit: null,
  title: null,
  hideOnBackdropClick: false
}

export default CustomModal
