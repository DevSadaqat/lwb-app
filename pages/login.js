import classes from '../styles/Login.module.css';
import { useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

function Login() {
    const router = useRouter();
    
    const userNameInputRef = useRef();
    const passwordInputRef = useRef();

    const allowedUsers = {
        username: 'bessie.biancalani',
        password: '123'
    }
  
    function submitHandler(event) {
      event.preventDefault();
  
      const enteredName = userNameInputRef.current.value;
      const enteredPassword = passwordInputRef.current.value;

      if(enteredName === allowedUsers.username && enteredPassword === allowedUsers.password) {
          console.log('TestPassed');
          localStorage.setItem('name', JSON.stringify(enteredName));
          router.push('/clients');
      } else {
          alert('Username or Password is incorrect');
      }

  
    //   const meetupData = {
    //     title: enteredTitle,
    //     image: enteredImage,
    //     address: enteredAddress,
    //     description: enteredDescription,
    //   };
  
    //   props.onAddMeetup(meetupData);
    }

    return(
      <div className={classes.loginWrapper}>
            <form onSubmit={submitHandler}>
            <p className={classes.errorMsg}>Username or Password is incorrect</p>
            <label>
                <p>Username</p>
                <input required type="text" ref={userNameInputRef} />
            </label>
            <label>
                <p>Password</p>
                <input required type="password" ref={passwordInputRef} />
            </label>
            <div className={classes.loginButton}>
                <button type="submit">Submit</button>
            </div>
            </form>
      </div>  
    )
  }

  export default Login