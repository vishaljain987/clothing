import React, { Component } from 'react';

import "./SignIn.scss";
import FormInput from "../forminput/FormInput";
import CustomButton from "../custombutton/CustomButton"
import {auth, signInWithGoogle} from "../../firebase/firebase.utils";

export default class SignIn extends Component {

    state={
        email:'',
        password:''
    }

    handleSubmit=async event=>{
        event.preventDefault();
        const {email, password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:'', password:''});
        }catch (error){
            console.log(error);
        }
       
    }

    handleChange=event=>{
        const {name, value} = event.target;

        this.setState({[name]:value});
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label="Email" required/>
                    <FormInput name="password" type="password" value={this.state.password} onChange={this.handleChange} label="Password" required/>
                    <div className="buttons">
                     <CustomButton type="submit">Submit Form</CustomButton>
                     <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
