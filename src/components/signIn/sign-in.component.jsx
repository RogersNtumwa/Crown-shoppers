import React, { Component } from "react";
import "./sign-in.styles.scss";

import FormInput from "../form-Input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.setState({
      email: "",
      password: "",
    });
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
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
