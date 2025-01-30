import { Link, NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.headerHome}>
      <Link to="/" className={css.logo}>Nanny.Services</Link>
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
    </header>
  );
};

export default Header;
