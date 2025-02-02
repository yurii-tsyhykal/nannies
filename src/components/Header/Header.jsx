import { Link, NavLink } from 'react-router-dom';
import css from './Header.module.css';
import Button from '../Button/Button';
import clsx from 'clsx';

const Header = (type) => {
  return (
    <header className={clsx(css.headerHome, !type && css.header)}>
      <Link to="/" className={css.logo}>
        Nanny.Services
      </Link>
      <div className={css.navWrapper}>
        <nav>
          <ul className={css.navList}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="nannies">Nannies</NavLink>
            </li>
          </ul>
        </nav>
        <div>
          <Button type="login">Log In</Button>
          <Button type="registration">Registration</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
