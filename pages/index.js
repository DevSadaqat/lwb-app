import classes from '../styles/Login.module.css';
import { useRouter } from 'next/router';
import React, { useState } from "react";
import Greeting from './greetings';


function Login() {
    const router = useRouter();
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [profileData, setProfileData] = useState({});
  
    
        // User Login info
    const allowedUsers = [
        {
            username: "bessie.biancalani",
            password: "pass1"
        },
        {
            username: "user2",
            password: "pass2"
        }
    ];

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    const submitHandler = (event) => {
        //Prevent page reload
        event.preventDefault();

        console.log(document.forms[0]);
        const { uname, pass } = document.forms[0];

        //Check wether user is allowed or not
        const userData = allowedUsers.find((user) => user.username === uname.value);

        // Compare user info
        if (userData) {
        if (userData.password !== pass.value) {
            // Invalid password
            setErrorMessages({ name: "pass", message: errors.pass });
        } else {
            setIsSubmitted(true);
            // setting profile data to share across user dashboard
            setProfileData({ profileUserName: uname.value, isLoggedIn: true });
            
          }
        } else {
            // Username not found
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };

    // JSX code snippet for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
        <div className={classes.error}>{errorMessages.message}</div>
        );

    // JSX code for login form
    const renderForm = (
        <div className="form">
        <form onSubmit={submitHandler}>
            <div className={classes.inputContainer}>
                <label>Username </label>
                <input type="text" name="uname" required />
                {renderErrorMessage("uname")}
            </div>
            <div className={classes.inputContainer}>
                <label>Password </label>
                <input type="password" name="pass" required />
                {renderErrorMessage("pass")}
            </div>
            <div className={classes.buttonContainer}>
                <input type="submit" />
            </div>
        </form>
        </div>
    );

    if(isSubmitted) {
        
        return <Greeting userProfileData = {profileData} />
    } 

    return(
        <div className={classes.app}>
            <div className={classes.loginform}>
                <div className={classes.title}>Sign In</div>
                {isSubmitted ? <p>login successfull</p> : renderForm}
        </div>
      </div>
    );
  }

  export default Login