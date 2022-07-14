// Modules
import { combineReducers } from'redux';

// Reducers
import userReducer from './user';

const reducersCombined = combineReducers({
  user: userReducer,
})

export default reducersCombined;