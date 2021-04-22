const initialState = {
  loader: true,
  data: [],
  error: '',
  counter: 0,
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

export default reducer;
