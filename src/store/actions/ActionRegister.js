import axios from '../../axios';
import { push } from 'connected-react-router';
import {
  REGISTER_USER_ERROR,
  REGISTER_USER_SUCCESS,
  REGISTER_USER
} from './ActionTypes';

const registerUser = () => ({
  type: REGISTER_USER,
  registerStatus: false,
});

const registerUserSuccess = data =>({
  type: REGISTER_USER_SUCCESS,
  registerStatus: data.status,
  message: data.message,
  user: data.user 
});
const registerUserError = data => ({
  type: REGISTER_USER_ERROR,
  registerStatus: false,
  message: data.message,
});

export const userRegister = data => dispatch => {
  dispatch(registerUser());
    axios.post('/register', data)
      .then(response => {
        const { message } = response.data;
        if( typeof message === 'object'){
          dispatch(registerUserError(response.data))
        }else {
          
          dispatch(registerUserSuccess(response.data));
          setTimeout(function(){
            dispatch(push('/login'));
          }, 500);
          
          
        }
      })
}