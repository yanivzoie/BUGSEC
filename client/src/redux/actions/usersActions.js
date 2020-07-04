import axios from 'axios';
import {
  ADD_USER,
  GET_USERS,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  GET_USERS_STARTED,
} from './types';

// Register User
export const register = ({
  firstName,
  lastName,
  username,
  password,
  occupation,
}) => async (dispatch) => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Request body
  const body = JSON.stringify({
    firstName,
    lastName,
    username,
    password,
    occupation,
  });

  try {
    const response = await axios.post('api/users/register', body, config);
    dispatch({ type: ADD_USER, payload: response.data });
  } catch (error) {
    dispatch(registerFailure(error.message));
  }
};

export const getUsers = () => async (dispatch, getState) => {
  dispatch(getUsersStarted());
  try {
    const response = await axios.get('/api/users');
    dispatch({ type: GET_USERS, payload: response.data });
    console.log('current state:', getState());
  } catch (error) {
    console.log(error);
  }
};

// const registerSuccess = (user) => ({
//   type: REGISTER_SUCCESS,
//   payload: {
//     ...user,
//   },
// });

const registerFailure = (error) => ({
  type: REGISTER_FAILURE,
  payload: {
    error,
  },
});
const getUsersStarted = () => ({
  type: GET_USERS_STARTED,
});
