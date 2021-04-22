export const users = () => {
  return {
    type: 'FETCH_USERS_REQUEST',
  };
};

export const success = user => {
  return {
    type: 'FETCH_USERS_SUCCESS',
    payload: user,
  };
};

export const failure = error => {
  return {
    type: 'FETCH_USERS_FAILURE',
    payload: error,
  };
};

export const inc = () => {
  return {type: 'INCREASE_COUNTER'};
};
export const increase = () => {
  return dispach => {
    setTimeout(() => {
      dispach(inc());
    }, 5000);
  };
};

export const decrease = () => {
  return dispach => {
    setTimeout(() => {
      dispach(dnc());
    }, 2000);
  };
};

export const dnc = () => {
  return {type: 'DECREASE_COUNTER'};
};
