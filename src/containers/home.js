import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import moment from 'moment'
import { TextInput, View, StyleSheet, Text, ListView } from 'react-native'
import DatePicker from 'react-native-datepicker'
import CustomModal from '../components/CustomModal'
import Icon from '../components/Icon'
import PopupMenu from '../components/PopupMenu'
import ViewPager from '../components/ViewPager'

import {
  selectActiveDate,
  selectActiveCardId,
  selectCards,
  selectActivitiesByDate
} from '../selectors'

import {
  setActiveDate,
  setActiveCardId
} from '../actions/config'
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
      activeDate: null,
      activeCardId: null,
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
      activeDate: this.props.date,
      activeCardId: cardId,
      dataSource: this.state.dataSource.cloneWithRows(this.props.activitiesByDate)
    })
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.activitiesByDate !== nextProps.activitiesByDate) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(
          nextProps.activitiesByDate
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
    this.props.setActiveCardId(id)
    this.setState({
      activePage: page,
      activeCardId: id,
      dataSource: this.state.dataSource.cloneWithRows(this.props.activitiesByDate)
    })
    this.listView.scrollTo({x: 0, y: 0, animated: true})
  }

  render () {
    return (
      <View style={styles.container}>
        <DatePicker
          date={this.props.activeDate}
          mode='date'
          placeholder='select date'
          format='DD-MM-YYYY'
          maxDate={this.props.date}
          confirmBtnText='Confirm'
          cancelBtnText='Cancel'
          // showIcon={false}
          // androidMode='spinner'
          customStyles={{
            dateInput: {
              borderWidth: 0
            }
          }}
          iconComponent={<Icon
            name='date-range'
            color='#616161'
          />}
          onDateChange={(date) => this.props.setActiveDate(date)}
        />
        <ViewPager
          style={styles.slider}
          onPageSelected={this.changeData}
          data={this.props.cards}
        />
        <View style={styles.listWrapper}>
          <View style={styles.divider}>
            <Text style={styles.infotext}>Page # {this.state.activePage}</Text>
            <Text style={styles.infotext}>Card ID {this.props.activeCardId}</Text>
            <Text style={styles.infotext}>Date # {this.props.activeDate}</Text>
          </View>
          <ListView
            ref={(c) => { this.listView = c }}
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
            enableEmptySections
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

const mapStateToProps = state => {
  const date = moment(new Date()).format('DD-MM-YYYY')
  const cards = selectCards(state)
  const activeCardId = selectActiveCardId(state) || cards[0].id || ''
  const activeDate = selectActiveDate(state) || date
  const activitiesByDate = selectActivitiesByDate(state, activeCardId, activeDate)

  return {
    date,
    cards,
    activeCardId,
    activeDate,
    activitiesByDate
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setActiveDate: (date) => dispatch(setActiveDate(date)),
    setActiveCardId: (id) => dispatch(setActiveCardId(id))
  }
}

HomeContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    setParams: PropTypes.func
  }),
  date: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired,
  activeCardId: PropTypes.string.isRequired,
  activeDate: PropTypes.string.isRequired,
  activitiesByDate: PropTypes.array.isRequired,
  setActiveDate: PropTypes.func.isRequired,
  setActiveCardId: PropTypes.func.isRequired
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
    backgroundColor: '#b2dfdb'
  },
  listWrapper: {
    flex: 3,
    backgroundColor: '#ccc'
  },
  divider: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#9fa8da',
    height: 60,
    padding: 10
  },
  infotext: {
    fontWeight: '500',
    color: '#fafafa'
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
