import {
  GET_USERS,
  ADD_USER,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  GET_USERS_STARTED,
} from '../actions/types';

const initialState = {
  isLoading: false,
  users: [],
  user: {
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    occupation: '',
  },
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        isLoading: false,
        users: action.payload,
      };
    case ADD_USER:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        users: [...state.users, action.payload],
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    case GET_USERS_STARTED:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
