import React, { Component } from "react";
import "./sign-in.styles.scss";

import FormInput from "../form-Input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  submitHandler = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: "",
      });
    } catch (error) {}
  };

  changeHandler = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div className="sign-in">
        <h1> I already have an account</h1>
        <span>Sign In with your email and Password</span>
        <form onSubmit={this.submitHandler}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            changeHandler={this.changeHandler}
            label="email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            changeHandler={this.changeHandler}
            label="password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} IsGoogleSignIn>
              Sign In With Google{" "}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
