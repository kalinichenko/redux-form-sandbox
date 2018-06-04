import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import thunk from 'redux-thunk';
import uiReducer from './reducers/ui.reducer';

const rootReducer = combineReducers({
  form: reduxFormReducer,
  ui: uiReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
