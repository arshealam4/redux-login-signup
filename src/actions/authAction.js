import axios from 'axios';
import config from '../config/config.json';
export const SIGNUP_BEGIN  = 'SIGNUP_BEGIN';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const LOGIN_BEGIN  = 'LOGIN_BEGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const signupBegin = () => ({
  type: SIGNUP_BEGIN
});

export const signupSuccess = user => ({
  type: SIGNUP_SUCCESS,
  payload: { user }
});

export const signupFailure = error => ({
  type: SIGNUP_FAILURE,
  payload: { error }
});

export function signupUser(user) {
    return dispatch => {
      dispatch(signupBegin());
      return axios.post(`${config.backendAPI}users/signup`, {values: user})
        .then(user => {
          if (user.data.success) {
            dispatch(signupSuccess(user.data));
          } else {
            dispatch(signupFailure(user.data));
          }
          
        })
        .catch(error => dispatch(signupFailure(error)));
    };
  }

  export const loginBegin = () => ({
    type: LOGIN_BEGIN
  });
  
  export const loginSuccess = user => ({
    type: LOGIN_SUCCESS,
    payload: { user }
  });
  
  export const loginFailure = error => ({
    type: LOGIN_FAILURE,
    payload: { error }
  });
  
  export function loginUser(user) {
    return dispatch => {
      dispatch(loginBegin());
      return axios.post(`${config.backendAPI}users/login`, {values: user})
        .then(user => {
          if (user.data.success) {
            localStorage.setItem('user', user.data.token)
            dispatch(loginSuccess(user.data));
          } else {
            dispatch(loginFailure(user.data));
          }
        })
        .catch(error => dispatch(loginFailure(error)));
    };
  }