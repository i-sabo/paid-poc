import { combineReducers } from 'redux'
import items from './items'

// We combine the different reducers into a combined reducer, where the specific
// reducers independently manage their specific slices of the state
const rootReducer = combineReducers({
  items
});

export default rootReducer
