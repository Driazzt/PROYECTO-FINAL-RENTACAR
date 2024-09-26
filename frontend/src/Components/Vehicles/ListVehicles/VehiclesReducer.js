import { GET_VEHICLES_BY_ID, LOAD_VEHICLES } from "./VehiclesActions";

const initialState = {
  products: undefined,
};

const vehiclesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_VEHICLES:
      return {
        ...state,
        vehicles: action.payload.vehicles,
      };
    case GET_VEHICLES_BY_ID:
      return {
        ...state,
        vehicle: action.payload.vehicle,
      };
    default:
      return state;
  }
};

export default vehiclesReducer;
