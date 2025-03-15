import { Link, NavLink } from 'react-router-dom';
import css from './Header.module.css';
import Button from '../Button/Button';
import clsx from 'clsx';
import { useState } from 'react';
import FormModal from '../FormModal/FormModal';
import SignUpForm from '../Forms/SignUpForm';

const Header = ({ type }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);

  return (
    <header
      className={clsx(
        css.header,
        type && css.headerHome,
        !type && css.headerNotHome
      )}
    >
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
          <Button type="button" variant="login" onClick={openModal}>
            Log In
          </Button>
          <Button type="button" variant="registration" onClick={openModal}>
            Registration
          </Button>
          <FormModal modalIsOpen={modalIsOpen} closeModal={closeModal}>
            <SignUpForm />
          </FormModal>
        </div>
      </div>
    </header>
  );
};

export default Header;
