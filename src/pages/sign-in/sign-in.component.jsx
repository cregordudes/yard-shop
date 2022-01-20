import React from "react";

import './sign-in.styles.scss';

import Login from "../../components/login/login.component";
import Register from "../../components/register/register.component";

const SignIn = () => (
   <div className="sign-in-and-sign-up">
      <div className="sign-in-page">
         <h1>SIGN IN</h1>
         <Login/>
      </div>
      <div className="sign-in-page">
         <h1>Sign Up</h1>
         <Register/>
      </div>
   </div>
   
);

export default SignIn;