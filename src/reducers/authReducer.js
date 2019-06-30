import {
    SIGNUP_BEGIN,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    LOGIN_BEGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
  } from '../actions/authAction';
  
  const initialState = {
    user: [],
    loading: false,
    error: false,
    success: false
  };

  export default function productReducer(state = initialState, action) {
    switch(action.type) {
      case SIGNUP_BEGIN:
        return {
          ...state,
          loading: true,
          error: false,
          success: false
        };
      case SIGNUP_SUCCESS:
        return {
          ...state,
          loading: false,
          user: action.payload.user,
          success: true,
          error: false
        };
      case SIGNUP_FAILURE:
        return {
          ...state,
          loading: false,
          error: true,
          success: false,
          user: action.payload.error,
        };
        case LOGIN_BEGIN:
        return {
          ...state,
          loading: true,
          error: false,
          success: false,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          loading: false,
          user: action.payload.user,
          success: true,
          error: false
        };
      case LOGIN_FAILURE:
        return {
          ...state,
          loading: false,
          error: true,
          success: false,
          user: action.payload.error,
        };
      default:
        return state;
    }
  }