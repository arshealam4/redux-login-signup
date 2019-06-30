import {
  USER_BEGIN,
  USER_SUCCESS,
  USER_FAILURE
  } from '../actions/userAction';
  
  const initialState = {
    users: [],
    loading: false,
    error: false,
    success: false,
  };

  export default function productReducer(state = initialState, action) {
    switch(action.type) {
      case USER_BEGIN:
        return {
          ...state,
          loading: true,
        };
      case USER_SUCCESS:
        return {
          ...state,
          loading: false,
          error: false,
          success: true,
          users: action.payload.user,
        };
      case USER_FAILURE:
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