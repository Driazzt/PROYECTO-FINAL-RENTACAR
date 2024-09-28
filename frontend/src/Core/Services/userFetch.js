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
    localStorage.setItem("token", data.token);
    console.log("Token Stored:", data.token);
  } else {
    console.error("Token do not exist");
  }

  return data.user;
};

//! getuserId fetch

export const getUser = async (userId) => {
  const authToken = localStorage.getItem("token");
  console.log("auth-token", authToken);
  console.log("userId", userId);
  if (!authToken) {
    console.error("No token found in localStorage");
    return null;
  }

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

//! getusers fetch

export const getAllUsers = async (user) => {
  const authToken = localStorage.getItem("token");
  if (!authToken) {
    console.error("No token found in localStorage");
    return null;
  }
  const res = await fetch("http://localhost:8000/user/getAllUsers", {
    method: "GET",
    headers: {
      "Content-Type": "Application/json",
      "auth-token": authToken,
    },
  });
  const result = await res.json();

  return result.user;
};

//! updateUser Fetch

export const modifyProfile = async (userId, newProfileModify) => {
  const authToken = localStorage.getItem("token");
  if (!authToken) {
    console.error("No token found in localStorage");
    return null;
  }
  const res = await fetch(`http://localhost:8000/user/${userId}`, {
    method: "PATCH",
    headers: {
      "content-type": "Application/json",
      "auth-token": authToken,
    },
    body: JSON.stringify({
      ...newProfileModify,
    }),
  });
  const result = await res.json();
  return result.user;
};

//! deleteUser Fetch

export const deleteUser = async (userId) => {
  const authToken = localStorage.getItem("token");
  if (!authToken) {
    console.error("No token found in localStorage");
    return null;
  }
  const res = await fetch(`http://localhost:8000/user/${userId}`, {
    method: "DELETE",
    headers: {
      "content-type": "Application/json",
      "auth-token": authToken,
    },
  });
  const result = await res.json();
  return result.user;
};

//! fetch createUser

export const createUserFetch = async (newUser) => {
  const authToken = localStorage.getItem("token");
  if (!authToken) {
    console.error("No token found in localStorage");
    return null;
  }

  const res = await fetch("http://localhost:8000/user/", {
    method: "POST",
    headers: {
      "content-type": "Application/json",
      "auth-token": authToken,
    },
    body: JSON.stringify({
      ...newUser,
    }),
  });
  const result = await res.json();
  return result.user;
};
