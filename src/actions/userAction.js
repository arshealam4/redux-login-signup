import axios from 'axios';
import config from '../config/config.json';
export const USER_BEGIN = 'USER_BEGIN';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAILURE = 'USER_FAILURE';

export const userBegin = () => ({
  type: USER_BEGIN
});

export const userSuccess = user => ({
  type: USER_SUCCESS,
  payload: { user }
});

export const userFailure = error => ({
  type: USER_FAILURE,
  payload: { error }
});

export function getUsers() {
  let options = {
    'headers': {
      'Authorization': localStorage.getItem('user')
    }
  }
    return dispatch => {
      return axios.get(`${config.backendAPI}users/user-list`, options)
        .then(user => {
          if (user.data.success) {
            dispatch(userSuccess(user.data.result));
          } else {
            dispatch(userFailure(user.data.result));
          }
        })
        .catch(error => dispatch(userFailure(error)));
    };
  }