import { StackNavigator } from 'react-navigation'
import {
  HomeContainer,
  SettingsContainer,
  OperationsListContainer
} from './containers'

export const router = StackNavigator({
  Home: {
    screen: HomeContainer
  },
  Operations: {
    screen: OperationsListContainer
  },
  Settings: {
    screen: SettingsContainer
  }
})

export default router
