import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOAD_USER_SUCCESS,
  EDIT_USER,
  EDIT_USER_SUCCESS,
  LOAD_USER_ERROR,

} from '../actions/ActionTypes';

const initialState = {
  isLoad: false,
  loginStatus: false ,
  user: {},
  editUser:false,
  company: [],
  loginErrors: {},
};

export default ( state = initialState, action) => {
  switch(action.type) {
    case LOGIN_USER:
      return Object.assign({}, state, {loginStatus: action.loginStatus});
    case LOGIN_USER_SUCCESS:
      return Object.assign({}, state, {loginStatus: action.loginStatus, user: action.user, company: action.company});
    case LOGIN_USER_ERROR:
      return Object.assign({}, state, {loginStatus: action.loginStatus, loginErrors: action.loginErrors});
    case LOAD_USER_SUCCESS: 
      return Object.assign({}, state, {loginStatus: action.loginStatus, user: action.user, isLoad: action.isLoad});
    case LOAD_USER_ERROR:
      return Object.assign({}, state, {isLoad: true});
    case EDIT_USER:
      return Object.assign({}, state, {editUser: action.editStatus});
    case EDIT_USER_SUCCESS:
      return Object.assign({}, state, {user:action.user, editUser: action.editStatus});
    default:
      return state;
  }
}