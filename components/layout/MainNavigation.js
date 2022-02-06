import classes from './MainNavigation.module.css';
import Link from 'next/link';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}><Link href='/'>LWB</Link></div>
      <nav>
        <ul>
          <li>
            <Link href='/clients'>All Customers</Link>
          </li>
          <li>
            <Link href='/favourite'>Favourites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
