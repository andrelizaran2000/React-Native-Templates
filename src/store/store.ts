// Modules
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

// Reducers
import reducersCombined from './reducers/index';

export const store = createStore(
  reducersCombined,
  {},
  applyMiddleware(thunk)
)

export type State = ReturnType<typeof reducersCombined>