import ClientList from "../components/client/ClientList";
import Layout from "../components/layout/Layout";
import { useEffect, useState } from "react";
import { getFilteredClients } from '../dummy-data';
import Greeting from "./greetings";
import GuestGreeting from "./guest";

const DUMMY_CLIENTS = [
   { 
       type: 'client',
       ccdms_id: 'CL8260',
       first_name: 'Paul',
       last_name: 'Webster',
       region:	'Central Coast OoHC'
   },
   { 
       type: 'carer',
       ccdms_id: 'CL8261',
       first_name: 'Sadaqat',
       last_name: 'Ali',
       region:	'Central West'
   }
];

//get username from session storage
function getUsername() {
    const userString = localStorage.getItem('name');
    const userName = JSON.parse(userString);
    return userName
  }

function Clients(props) {
    // const [data, setData] = useState(null)
    // const [isLoading, setLoading] = useState(false)
    if (props.isLoggedIn) {
        const user = getUsername();
        const feturedClients = getFilteredClients(user);
        return (
            <Layout><ClientList clients = {feturedClients} /></Layout>    
        );
      }
      return <GuestGreeting />

    
       

       


//   useEffect(() => {
//     setLoading(true)
//     fetch('http://lwb-test-dev-take-home-test.s3-website-ap-southeast-2.amazonaws.com/data.json')
//       .then((data) => {
//         setData(data)
//         setLoading(false)
//       })
//   }, [])

//   if (isLoading) return <p>Loading...</p>
//   if (!data) return <p>No profile data</p>
//   if (data) return <p>profile data{data[0]}</p>

    // return (
    //     <Layout><ClientList clients = { feturedClients } /></Layout>    
    // );
}

// export async function getServerSideProps() {
//     //fetch data from the server 

//     return {
//         props: {
//             clients: DUMMY_CLIENTS
//         }
//     };
// }

// export async function getStaticProps() {
//     //fetch data from the server 
//     const response = await fetch('http://lwb-test-dev-take-home-test.s3-website-ap-southeast-2.amazonaws.com/data.json');
//     console.log('fectching data')
//     console.log(response[1]);

//     return {
//         props: {
//             clients: DUMMY_CLIENTS
//         },
//         revalidate: 3600
//     };
// }

export default Clients;