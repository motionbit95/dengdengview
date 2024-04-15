import React, { useEffect } from "react";
import { LoginWithEmailPasswordOrNaver } from "../Application/Authentication/Login3/App";

function Login() {
  useEffect(() => {
    sessionStorage.clear();
    localStorage.clear();
  }, []);
  const handleSignIn = () => {
    console.log("handleSignIn");
  };
  return (
    <>
      <LoginWithEmailPasswordOrNaver handleSignIn={handleSignIn} />
    </>
  );
}

export default Login;
