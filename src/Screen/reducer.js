import * as types from './constants';
const initialState = {
  loading: false,
  data: [],
  error: '',
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_USERS_REQUEST:
      return {
        ...state,
        loader: true,
      };
    case types.FETCH_USERS_SUCCESS:
      return {
        loader: false,
        data: action.payload,
        error: '',
      };
    case types.FETCH_USERS_FAILURE:
      return {
        loader: false,
        data: [],
        error: action.payload,
      };
  }
  return state;
};
