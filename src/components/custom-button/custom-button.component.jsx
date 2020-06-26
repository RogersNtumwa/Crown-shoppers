import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, IsGoogleSignIn, ...OtherProps }) => {
  return (
    <button
      className={`${IsGoogleSignIn ? "google-sign-in" : " "} custom-button`}
      {...OtherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
