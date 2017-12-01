import React from 'react'
import PropTypes from 'prop-types'
import { View, ViewPagerAndroid, Text } from 'react-native'
import ViewPagerDots from './ViewPagerDots'

class ViewPager extends React.Component {
  constructor (props) {
    super(props)
    this.onPageSelected = this.onPageSelected.bind(this)
  }

  onPageSelected (e) {
    const id = this.props.data[e.nativeEvent.position].id
    this.dots.onPageSelected(e, id)
  }

  renderDotsBar () {
    return <ViewPagerDots
      onPageSelected={this.props.onPageSelected}
      data={this.props.data}
      viewPager={() => { return this.viewPager }}
      ref={(c) => { this.dots = c }}
    />
  }

  render () {
    return (
      <View style={this.props.style}>
        <ViewPagerAndroid
          ref={(c) => { this.viewPager = c }}
          onPageSelected={this.onPageSelected}
          style={{flex: 1}}
        >
          {this.props.data.map(el =>
            <View key={el.id} style={{alignItems: 'center', padding: 20}}>
              <Text>{el.id}</Text>
              <Text>{el.name}</Text>
              <Text>{el.amount}</Text>
              <Text>{el.currency}</Text>
            </View>)
          }
        </ViewPagerAndroid>
        {this.renderDotsBar()}
      </View>
    )
  }
}

ViewPager.propTypes = {
  data: PropTypes.array.isRequired,
  onPageSelected: PropTypes.func.isRequired,
  style: PropTypes.any
}

ViewPager.defaultProps = {
  style: {}
}

export default ViewPager
