import { LoginWithCenteredForm } from "../Application/Authentication/Login1/App";
import { LoginWithEmailOrProvider } from "../Application/Authentication/Login2/App";
import { LoginWithEmailPasswordOrGoogle } from "../Application/Authentication/Login3/App";
import { LoginWithFloatingLabel } from "../Application/Authentication/Login4/App";
import { LoginWithFlushedInput } from "../Application/Authentication/Login5/App";
import { LoginWithGoogleOrEmail } from "../Application/Authentication/Login6/App";
import { LoginWithGradient } from "../Application/Authentication/Login7/App";
import { LoginWithLeftBackground } from "../Application/Authentication/Login8/App";
import { SignUpForm } from "../Application/Authentication/Login9/App";
import { SignUpWithQuote } from "../Application/Authentication/Login10/App";

function Login() {
  return (
    <>
      <LoginWithCenteredForm />
      <LoginWithEmailOrProvider />
      <LoginWithEmailPasswordOrGoogle />
      <LoginWithFloatingLabel />
      <LoginWithFlushedInput />
      <LoginWithGoogleOrEmail />
      <LoginWithGradient />
      <LoginWithLeftBackground />
      <SignUpForm />
      <SignUpWithQuote />
    </>
  );
}

export default Login;
