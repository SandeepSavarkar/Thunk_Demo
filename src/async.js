const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunk = require('redux-thunk').default;
const axios = require('axios');

const initialState = {
  loading: false,
  data: [],
  error: '',
};

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

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

const fetchUser = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest())
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        const user = response.data.map(user => user.id);
        dispatch(fetchUserSuccess(user));
      })
      .catch(error => {
        dispatch(fetchUserFailure(error.message));
      });
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return {counter: state.counter + 1};
    case 'DECREASE_COUNTER':
      return {counter: state.counter - 1};
    case 'FETCH_USERS_REQUEST':
      return {
        ...state,
        loader: true,
      };
    case 'FETCH_USERS_SUCCESS':
      return {
        loader: false,
        data: action.payload,
        error: '',
      };
    case 'FETCH_USERS_FAILURE':
      return {
        loader: false,
        data: [],
        error: action.payload,
      };
  }
  return state;
};

const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUser());
