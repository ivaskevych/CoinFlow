import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, UIManager, findNodeHandle, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

class PopupMenu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      icon: null
    }
  }

  onError () {
    console.log('Popup Error')
  }

  onPress = () => {
    if (this.state.icon) {
      UIManager.showPopupMenu(
        findNodeHandle(this.state.icon),
        this.props.actions,
        this.onError,
        this.props.onPress
      )
    }
  }

  onRef = icon => {
    if (!this.state.icon) {
      this.setState({icon})
    }
  }

  render () {
    const {size, name, color, style} = this.props
    return (
      <View>
        <TouchableOpacity onPress={this.onPress}>
          <Icon
            style={style}
            name={name}
            size={size}
            color={color}
            ref={this.onRef} />
        </TouchableOpacity>
      </View>
    )
  }
}

PopupMenu.propTypes = {
  actions: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.object,
  size: PropTypes.number,
  name: PropTypes.string,
  color: PropTypes.string
}

PopupMenu.defaultProps = {
  onPress: () => true,
  style: {},
  size: 24,
  name: 'more-vert',
  color: '#424242'
}

export default PopupMenu
