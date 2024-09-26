import { MODIFY_VEHICLES_ACTION } from "./VehiclesInfoActions";

const initialState = {
  products: undefined,
};

const modifyReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODIFY_VEHICLES_ACTION:
      return {
        ...state,
        vehicles: action.payload.vehicles,
      };
    default:
      return state;
  }
};

export default modifyReducer;
