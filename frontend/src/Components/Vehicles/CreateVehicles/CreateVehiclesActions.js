export const LOAD_NEW_VEHICLE = "LOAD_NEW_VEHICLE";

export const loadCreateVehicle = (payload) => {
  return {
    type: LOAD_NEW_VEHICLE,
    payload,
  };
};
