//! fetch getallvehicles

export const getVehicles = async () => {
  const res = await fetch("http://localhost:8000/vehicles");
  const result = await res.json();

  return result.vehicles;
};
