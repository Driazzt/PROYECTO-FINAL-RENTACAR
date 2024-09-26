export const MODIFY_VEHICLES_ACTION = "MODIFY_VEHICLES_ACTION";

export const modifyVehiclesAction = (payload) => {
  return {
    type: MODIFY_VEHICLES_ACTION,
    payload,
  };
};
