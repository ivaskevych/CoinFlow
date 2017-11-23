import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'

const logger = createLogger({
  duration: true,
  collapsed: true,
  titleFormatter (action, time, took) {
    return `action ${action.key || ''} ${action.type} @ ${time} (in ${took.toFixed(2)}ms)`
  }
})

const middleware = [thunk]

if (__DEV__) middleware.push(logger)

export default middleware
