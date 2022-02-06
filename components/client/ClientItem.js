import { useRouter } from 'next/router';

import Card from '../ui/Card';
import classes from './ClientItem.module.css';

function ClientItem(props) {
  const router = useRouter();
  
  function showDetailsHandler() {
    console.log('Added to favpurite list')
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{props.type}</h3>
          <p>{props.first_name + props.last_name}</p>
          <p>{props.id}</p>
          <address>{props.region}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Add to favourite list</button>
        </div>
      </Card>
    </li>
  );
}

export default ClientItem;