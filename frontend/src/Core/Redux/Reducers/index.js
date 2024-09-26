import { combineReducers } from "redux";
import userReducer from "../../../Components/User/UserReducer";
import menuReducer from "../../../Components/Menu/MenuReducer";
import vehiclesReducer from "../../../Components/Vehicles/VehiclesReducer";

const reducer = combineReducers({
  userReducer,
  menuReducer,
  vehiclesReducer,
});

export default reducer;
