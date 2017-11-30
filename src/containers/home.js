import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { TextInput, View, StyleSheet, Text, ListView } from 'react-native'
import CustomModal from '../components/CustomModal'
import Icon from '../components/Icon'
import PopupMenu from '../components/PopupMenu'
import ViewPager from '../components/ViewPager'

import {
  selectCards,
  selectActivities,
  // selectActivitiesByDate
} from '../selectors'
class HomeContainer extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state
    return {
      title: '',
      headerRight: <PopupMenu
        actions={['Operations', 'Settings']}
        onPress={params.onPopupEvent}
        style={{marginRight: 10}}
      />
    }
  }

  constructor (props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      modalVisible: false,
      activePage: 0,
      activeCardId: null,
      currentDate: '29-11-2017',
      dataSource: ds
    }
    this.setModalVisible = this.setModalVisible.bind(this)
    this.onPopupEvent = this.onPopupEvent.bind(this)
    this.renderRow = this.renderRow.bind(this)
    this.changeData = this.changeData.bind(this)
  }

  componentDidMount () {
    this.props.navigation.setParams({ onPopupEvent: this.onPopupEvent })
    const cardId = this.props.cards[0].id
    this.setState({
      activeCardId: this.props.cards[0].id,
      dataSource: this.state.dataSource.cloneWithRows(this.props.activities[cardId][this.state.currentDate])
    })
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.activities !== nextProps.activities) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(
          nextProps.activities[this.state.activeCardId][this.state.currentDate]
        )
      })
    }
  }

  setModalVisible (visible) {
    this.setState({modalVisible: visible})
  }

  onPopupEvent = (eventName, index) => {
    if (eventName !== 'itemSelected') return
    if (index === 0) this.props.navigation.navigate('Operations')
    else this.props.navigation.navigate('Settings')
  }

  renderRow = (rowData, sectionID, rowID, highlightRow) =>
    <View style={
      [{padding: 20},
        rowID % 2 === 0 ? {backgroundColor: '#fafafa'} : {backgroundColor: '#f5f5f5'}]
    }>
      <Text>
        {`${rowData.name} ${rowData.cardId} ${rowData.amount}`}
      </Text>
    </View>

  changeData = (page, id) => {
    this.setState({
      activePage: page,
      activeCardId: id,
      dataSource: this.state.dataSource.cloneWithRows(this.props.activities[id][this.state.currentDate])
    })
    this.listView.scrollTo({x: 0, y: 0, animated: true})
  }

  render () {
    return (
      <View style={styles.container}>
        <ViewPager
          style={styles.slider}
          onPageSelected={this.changeData}
          data={this.props.cards}
        />
        <View style={styles.listWrapper}>
          <View style={styles.divider}>
            <Text>Page # {this.state.activePage}</Text>
            <Text>Card ID {this.state.activeCardId}</Text>
          </View>
          <ListView
            ref={(c) => { this.listView = c }}
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
          />
        </View>
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

// const cardId = 'e435d915-969b-4913-a5b1-56bc368dfcb3'
// const date = '29-11-2017'

const mapStateToProps = state => {
  const cards = selectCards(state)
  const activities = selectActivities(state)
  // const activities = selectActivitiesByDate(state, cardId, date)

  return {
    cards,
    activities
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
  },
  slider: {
    flex: 2,
    backgroundColor: '#bbc'
  },
  listWrapper: {
    flex: 3,
    backgroundColor: '#ccc'
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 60,
    padding: 10
  }
})

export default connect(mapStateToProps)(HomeContainer)
