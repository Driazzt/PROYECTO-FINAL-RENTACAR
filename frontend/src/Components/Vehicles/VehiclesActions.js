export const LOAD_VEHICLES = "LOAD_VEHICLES";

export const loadVehicles = (payload) => {
  return {
    type: LOAD_VEHICLES,
    payload,
  };
};
