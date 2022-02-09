import { useRouter } from 'next/router';
import Favourite from '../../pages/favourite';
import React, { useState } from "react"
import Card from '../ui/Card';
import classes from './ClientItem.module.css';

function ClientItem(props) {
  const [list, setList] = useState([]);
  
  function favouriteListHandler(props) {

    const  favouriteList = {
      key: props.id,
      id: props.id,
      first_name : props.first_name,
      last_name: props.last_name,
      region: props.region
    }
      setList((prevList) => {
         return [favouriteList, ...prevList];
      }
     );
     localStorage.setItem('lists', JSON.stringify(list));
  }

  // if(list.length > 1) {
  //   localStorage.setItem('list', JSON.stringify(list));
  //   //  <Favourite list = { list } />
  // }

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
          <button onClick={() => favouriteListHandler(props)}>Add to favourite list</button>
        </div>
      </Card>
    </li>
  );
}
export default ClientItem;