import { combineReducers } from 'redux'
import counter from './counter'
import listBook from './listBook'

export default combineReducers({
  counter,
  listBook
})
