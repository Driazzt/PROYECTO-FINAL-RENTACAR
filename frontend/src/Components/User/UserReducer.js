import { LOAD_INFO, LOGIN, LOGOUT } from "./UserActions";

const initialState = {
  user: undefined,
  isOnline: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload.user,
        isOnline: true,
      };
    case LOAD_INFO:
      return {
        ...state,
        user: action.payload.user,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default userReducer;
