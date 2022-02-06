import Layout from "../components/layout/Layout";
import ClientList from "../components/client/ClientList";

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
    return (
        <Layout><ClientList clients={DUMMY_CLIENTS} /></Layout>    
    );
}

export default Favourite;