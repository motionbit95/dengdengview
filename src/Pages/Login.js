import { useEffect } from "react";
import { LoginWithEmailPasswordOrNaver } from "../Application/Authentication/Login3/App";

function Login() {
  useEffect(() => {
    sessionStorage.clear();
    localStorage.clear();
  }, []);

  return (
    <>
      <LoginWithEmailPasswordOrNaver />
    </>
  );
}

export default Login;
