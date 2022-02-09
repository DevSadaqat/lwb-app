import Layout from "../components/layout/Layout";
import ClientList from "../components/client/ClientList";
import ClientItem from "../components/client/ClientItem";

const DUMMY_CLIENTS = [
    { 
        type: 'client',
        ccdms_id: 'CL8260',
        first_name: 'Paul',
        last_name: 'Webster',
        region:	'Central Coast OoHC'
    }
 ];

function Favourite() {
    let favouriteList = JSON.parse(localStorage.getItem("lists"));
    console.log(favouriteList)
    return (
        <>
            <h2>Favourite List</h2>
            <ul>
                {favouriteList.map((client) => (
                    <li>
                        {client.key}
                        {client.id}
                        {client.first_name}
                        {client.last_name}
                        {client.region}
                    </li>              
                ))}
            </ul>
        </>
      );
}


export default Favourite;