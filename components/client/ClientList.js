import ClientItem from './ClientItem';
import classes from './ClientList.module.css';

function ClientList(props) {
    return (
      <ul className={classes.list}>
        {props.clients.map((client) => (
          <ClientItem
            key={client.ccdms_id}
            id={client.ccdms_id}
            type={client.type}
            first_name={client.first_name}
            last_name={client.last_name}
            region={client.region}
          />
        ))}
      </ul>
    );
  }
  
  export default ClientList;