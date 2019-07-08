import axios from '../../axios';
import { push } from 'connected-react-router';
import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOG_OUT,
} from './ActionTypes';


const loginUser = () => ({
  type: LOGIN_USER,
  loginStatus: false,
});

const loginUserSuccess = data => ({
  type: LOGIN_USER_SUCCESS,
  loginStatus: data.status,
  user: data.user,
  company: data.company,
  isLoad: true,
});
const loginUserError = data => ({
  type: LOGIN_USER_ERROR,
  loginStatus:false,
  loginErrors: data.message
})

export const userLogin = data => dispatch => {
  dispatch(loginUser());
  axios.post('/login',data)
    .then(response => {
      const { message, token } = response.data;
      if(!message){
        localStorage.setItem('token', token)
        dispatch(loginUserSuccess(response.data))
        dispatch(push('/'))
      }else{
        dispatch(loginUserError(response.data))
      }
      
    })
}

const logOut = () => ({
  type: LOG_OUT,
  loginStatus: false,
  isLoad: true,
});


export function logOutUser() {
  return (dispatch) => {
    dispatch(logOut());
    localStorage.removeItem('token');
    dispatch(push('/login'));
  };
}
