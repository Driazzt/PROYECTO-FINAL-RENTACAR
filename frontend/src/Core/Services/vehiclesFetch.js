//! fetch getallvehicles

export const getVehicles = async () => {
  const res = await fetch("http://localhost:8000/vehicles");
  const result = await res.json();

  return result.vehicles;
};

//! getProductbyID

export const getVehicleById = async (vehicleId) => {
  const authToken = localStorage.getItem("token");
  if (!authToken) {
    console.error("No token found in localStorage");
    return null;
  }
  const res = await fetch(`http://localhost:8000/vehicles/${vehicleId}`, {
    method: "GET",
    headers: {
      "content-type": "Application/json",
      "auth-token": authToken,
    },
  });
  const result = await res.json();
  return result.vehicles;
};

//! fetch createVehicles

export const createVehicles = async (newVehicles) => {
  const authToken = localStorage.getItem("token");
  if (!authToken) {
    console.error("No token found in localStorage");
    return null;
  }

  const res = await fetch("http://localhost:8000/vehicles/createVehicle", {
    method: "POST",
    headers: {
      "content-type": "Application/json",
      "auth-token": authToken,
    },
    body: JSON.stringify({
      ...newVehicles,
    }),
  });
  const result = await res.json();
  return result.vehicles;
};

//! updateVehicles Fetch

export const modifyVehicles = async (vehicleId, newVehicleModify) => {
  const authToken = localStorage.getItem("token");
  if (!authToken) {
    console.error("No token found in localStorage");
    return null;
  }
  const res = await fetch(`http://localhost:8000/vehicles/${vehicleId}`, {
    method: "PATCH",
    headers: {
      "content-type": "Application/json",
      "auth-token": authToken,
    },
    body: JSON.stringify({
      ...newVehicleModify,
    }),
  });
  const result = await res.json();
  return result.vehicles;
};

//! deleteVehicles Fetch

export const deleteVehicle = async (vehicleId) => {
  const authToken = localStorage.getItem("token");
  if (!authToken) {
    console.error("No token found in localStorage");
    return null;
  }
  const res = await fetch(`http://localhost:8000/vehicles/${vehicleId}`, {
    method: "DELETE",
    headers: {
      "content-type": "Application/json",
      "auth-token": authToken,
    },
  });
  const result = await res.json();
  return result.vehicles;
};
