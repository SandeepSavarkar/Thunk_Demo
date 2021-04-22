import axios from 'axios';
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from './constants';
// const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
// const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
// const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

const fetchUserRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchUserSuccess = user => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: user,
  };
};

const fetchUserFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest());
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        const user = response.data;
        dispatch(fetchUserSuccess(user));
      })
      .catch(error => {
        dispatch(fetchUserFailure(error.message));
      });
  };
};
