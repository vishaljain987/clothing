import React from 'react';

import "./SigninPage.scss";
import SignIn from  "../../components/signin/SignIn";
import SignUp from "../../components/signup/SignUp";

export default function SigninPage() {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    )
}
