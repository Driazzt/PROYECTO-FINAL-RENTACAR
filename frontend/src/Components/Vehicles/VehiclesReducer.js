import { LOAD_VEHICLES } from "./VehiclesActions";

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
    default:
      return state;
  }
};

export default vehiclesReducer;
