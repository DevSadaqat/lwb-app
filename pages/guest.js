import Link from 'next/link';

function GuestGreeting(props) {
    return (
        <div>
            <h1>Please sign in</h1>
            <Link href='/'>Proceed to login page</Link>
        </div>
        
    ) 
}

export default GuestGreeting;
