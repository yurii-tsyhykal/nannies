import { Link, NavLink } from 'react-router-dom';
import css from './Header.module.css';
import Button from '../Button/Button';
import clsx from 'clsx';
import { useState } from 'react';
import FormModal from '../FormModal/FormModal';
import SignUpForm from '../Forms/SignUpForm/SignUpForm';
import LogInForm from '../Forms/LogInForm/LogInForm';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../../redux/auth/selectors';
import UserMenu from '../UserMenu/UserMenu';

const Header = ({ type }) => {
  const [modalContent, setModalContent] = useState(null);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const openModal = content => setModalContent(content);
  const closeModal = () => setModalContent(null);

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
      <div className={clsx(css.navWrapper, !type && css.notHomeNavWrapper)}>
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
        {isAuthenticated ? (
          <UserMenu closeModal={closeModal} />
        ) : (
          <div>
            <Button
              type="button"
              variant="login"
              onClick={() => openModal(<LogInForm />)}
            >
              Log In
            </Button>
            <Button
              type="button"
              variant="registration"
              onClick={() => openModal(<SignUpForm />)}
            >
              Registration
            </Button>
            <FormModal modalIsOpen={!!modalContent} closeModal={closeModal}>
              {modalContent}
            </FormModal>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
