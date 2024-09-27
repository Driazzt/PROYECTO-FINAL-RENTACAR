import { combineReducers } from "redux";
import userReducer from "../../../Components/User/UserReducer";
import vehiclesReducer from "../../../Components/Vehicles/ListVehicles/VehiclesReducer";

const reducer = combineReducers({
  userReducer,
  vehiclesReducer,
});

export default reducer;
