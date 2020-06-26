import React from "react";
import "./sign-in-and-sign-up.styles.scss";
import SignIn from "../../components/signIn/sign-in.component";
import SignUp from "../../components/signUp/sign-Up.component";

const SignInAndSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUpPage;
