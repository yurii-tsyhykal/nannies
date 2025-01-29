import { Link, NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className="">
      <Link to="/">Nanny.Services</Link>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="nannies">Nannies</NavLink>
      </nav>
    </header>
  );
};

export default Header;
