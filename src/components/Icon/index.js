import PropTypes from 'prop-types'
import React from 'react'
import {
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

const Icon = props => {
  const {
    name,
    size,
    color,
    iconStyle,
    component,
    underlayColor,
    reverse,
    raised,
    containerStyle,
    reverseColor,
    onPress,
    ...attributes
  } = props

  let Component = View

  if (onPress) {
    Component = TouchableHighlight
  }

  if (component) {
    Component = component
  }

  let Icon = MaterialIcon

  return (
    <Component
      {...attributes}
      underlayColor={reverse ? color : underlayColor || color}
      style={[
        (reverse || raised) && styles.button,
        (reverse || raised) && {
          borderRadius: size + 4,
          height: size * 2 + 4,
          width: size * 2 + 4
        },
        raised && styles.raised,
        {
          backgroundColor: reverse ? color : raised ? '#fff' : 'transparent',
          alignItems: 'center',
          justifyContent: 'center'
        },
        containerStyle && containerStyle
      ]}
      onPress={onPress}
    >
      <Icon
        style={[{backgroundColor: 'transparent'}, iconStyle && iconStyle]}
        size={size}
        name={name}
        color={reverse ? reverseColor : color}
      />
    </Component>
  )
}

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  component: PropTypes.func,
  underlayColor: PropTypes.string,
  reverse: PropTypes.bool,
  raised: PropTypes.bool,
  containerStyle: PropTypes.any,
  iconStyle: PropTypes.any,
  onPress: PropTypes.func,
  reverseColor: PropTypes.string
}

Icon.defaultProps = {
  underlayColor: '#fff',
  reverse: false,
  raised: false,
  size: 24,
  color: '#000',
  reverseColor: '#fff'
}

const styles = StyleSheet.create({
  button: {
    margin: 7
  },
  raised: {
    elevation: 2
  }
})

export default Icon
