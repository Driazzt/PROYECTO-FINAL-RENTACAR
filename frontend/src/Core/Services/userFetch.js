//! fetch signup

export const createUser = async (newUser) => {
  const res = await fetch("http://localhost:8000/login/signup", {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(newUser),
  });
  const result = await res.json();
  return result.user;
};

//! fetch login

export const doLoginFetch = async (email, password) => {
  console.log("Email:", email, "Password:", password);

  const res = await fetch("http://localhost:8000/login/login", {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (!res.ok) {
    throw new Error("Error, try again");
  }
  const data = await res.json();

  if (data.token) {
    localStorage.setItem("Token", data.token);
    console.log("Token Stored:", data.token);
  } else {
    console.error("Token do not exist");
  }

  return data.user;
  // const result = await res.json();
  // return result.user;
};

//! getuserId fetch

export const getUser = async (userId) => {
  const authToken = localStorage.getItem("token");
  console.log("auth-token", authToken);
  console.log("userId", userId);

  const res = await fetch(`http://localhost:8000/user/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "Application/json",
      "auth-token": authToken,
    },
  });

  const result = await res.json();
  return result.user;
};

//! fetch addvehiclestocart

export const addVehiclesToCart = async (userId, vehiclesId) => {
  const res = await fetch("http://localhost:8000/user/addVehicles", {
    method: "POST",
    headers: {
      "content-type": "Application/json",
    },
    body: JSON.stringify({
      userId,
      vehiclesId,
    }),
  });
  const result = await res.json();
  return result;
};
