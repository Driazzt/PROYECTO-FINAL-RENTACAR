export const LOAD_VEHICLES = "LOAD_VEHICLES";
export const GET_VEHICLES_BY_ID = "GET_VEHICLES_BY_ID";

export const loadVehicles = (payload) => {
  return {
    type: LOAD_VEHICLES,
    payload,
  };
};

export const loadVehicleId = (payload) => {
  return {
    type: GET_VEHICLES_BY_ID,
    payload,
  };
};
