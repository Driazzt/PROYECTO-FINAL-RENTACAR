import { CHANGE_MENU_OPTION } from "./MenuActions";

const initialState = {
  menuOption: 0,
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MENU_OPTION:
      return {
        ...state,
        menuOption: action.payload.menuOption,
      };
    default:
      return state;
  }
};

export default menuReducer;
