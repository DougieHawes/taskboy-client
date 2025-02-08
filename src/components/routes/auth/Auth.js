import { useState } from "react";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

import "./style.scss";

const Auth = () => {
  const [signInOut, setSignInOut] = useState("signin");

  return (
    <div className="auth">
      {signInOut === "signin" ? (
        <SignIn onClick={() => setSignInOut("signup")} />
      ) : (
        <SignUp onClick={() => setSignInOut("signin")} />
      )}
    </div>
  );
};

export default Auth;
