import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

class ViewPagerDots extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      activePage: 0
    }
  }

  onPageSelected (e, id) {
    this.setState({activePage: e.nativeEvent.position})
    this.props.onPageSelected(e.nativeEvent.position, id)
  }

  goToPage (page, id) {
    this.props.viewPager().setPage(page)
    this.props.onPageSelected(page, id)
    this.setState({activePage: page})
  }

  renderDot (el, page) {
    const isPageActive = this.state.activePage === page
    return (
      <TouchableOpacity key={page} onPress={() => this.goToPage(page, el.id)}>
        <View style={[styles.dot, (isPageActive ? styles.active : styles.inactive)]} />
      </TouchableOpacity>
    )
  }

  render () {
    return (
      <View style={styles.dots} {...this.props}>
        {this.props.data.map((el, i) => this.renderDot(el, i))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  dots: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dot: {
    width: 7,
    height: 7,
    marginHorizontal: 3,
    borderRadius: 5,
    borderColor: '#fff',
    backgroundColor: 'rgba(255, 255, 255, 0.3)'
  },
  active: {
    backgroundColor: '#fff'
  },
  intactive: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)'
  }
})

ViewPagerDots.propTypes = {
  data: PropTypes.array.isRequired,
  onPageSelected: PropTypes.func.isRequired,
  viewPager: PropTypes.any
}

export default ViewPagerDots
