import { LOAD_NEW_VEHICLE } from "./CreateVehiclesActions";

const initialState = {
  products: undefined,
};

const createVehicleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_NEW_VEHICLE:
      return {
        ...state,
        vehicles: action.payload.vehicles,
      };
    default:
      return state;
  }
};

export default createVehicleReducer;
