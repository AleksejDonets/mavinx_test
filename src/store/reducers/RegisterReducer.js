import {
  REGISTER_USER_ERROR,
  REGISTER_USER_SUCCESS,
  REGISTER_USER,
} from '../actions/ActionTypes';

const initialState = {
  status: false,
  message: '',
  errMessage: []
}

export default (state = initialState, action ) => {
  switch(action.type) {
    case REGISTER_USER: 
      return Object.assign({}, state, { status: action.registerStatus});
    case REGISTER_USER_SUCCESS: 
      return Object.assign({}, state, {status: action.registerStatus, message: action.message})
    case REGISTER_USER_ERROR:
      return Object.assign({}, state, { status: action.registerStatus, errMessage: action.message})
    default:
      return state;
  }
}