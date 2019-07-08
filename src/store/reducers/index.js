import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as reduxFormReducer } from 'redux-form';
import registerUser from './RegisterReducer';
import loginUser from './LoginReducer';

export default history => combineReducers({
  router: connectRouter(history),
  form: reduxFormReducer,
  registerUser,
  loginUser
});