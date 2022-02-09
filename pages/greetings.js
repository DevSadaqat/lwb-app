import Clients from './clients';
import GuestGreeting from './guest';

function Greeting(props) {
    const { profileUserName, isLoggedIn } = props.userProfileData;
    localStorage.setItem('name', JSON.stringify(profileUserName));
    if (isLoggedIn) {
      return <Clients isLoggedIn = {isLoggedIn} />;
    }
    return <GuestGreeting />;
}

export default Greeting;
