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

  const result = await res.json();
  return result.user;
};
