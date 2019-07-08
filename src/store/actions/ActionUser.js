import axios from '../../axios';
import {
  EDIT_USER,
  EDIT_USER_SUCCESS,
  LOAD_USER,
  LOAD_USER_SUCCESS,
  LOAD_USER_ERROR,
} from './ActionTypes';

export const editUser = () => ({
  type: EDIT_USER,
  editStatus: true,
});

export const editUserSuccess = data => ({
  isLoad: true,
  type: EDIT_USER_SUCCESS,
  user: data.user,
  editStatus: false,
});

export const loadUser = () => ({
  type: LOAD_USER,
});

export const loadUserSuccess = data => ({
  type: LOAD_USER_SUCCESS,
  isLoad: true,
  user: data.user,
  loginStatus: data.status
});

export const loadUserError = () => ({
  type: LOAD_USER_ERROR,
  isLoad: true,
})

const authToken = { headers: { Authorization: ` ${localStorage.token}` }};

export const fetchUser = () => dispatch => {
  dispatch(loadUser())
  axios.get('/get-user', authToken )
    .then(response => dispatch(loadUserSuccess(response.data)))
    .catch(error => dispatch(loadUserError(error)))
}

export const userEdit = user => dispatch => {
  axios.post('/edit-user',user, authToken)
  .then( response => dispatch(editUserSuccess(response.data)));
}