import React from "react";

const useAuth = () => {
  const isAuth = localStorage.getItem("jwt");
  return { isAuth: Boolean(isAuth) };
};

export default useAuth;
