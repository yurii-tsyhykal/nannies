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

  const openModal = content => {
    console.log('modal is open');
    setModalContent(content);
  };
  const closeModal = () => {
    console.log('modal is close');
    setModalContent(null);
  };

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
            {!type && isAuthenticated && (
              <li>
                <NavLink to="favorites">Favorites</NavLink>
              </li>
            )}
          </ul>
        </nav>
        {isAuthenticated ? (
          <UserMenu />
        ) : (
          <div>
            <Button
              type="button"
              variant="login"
              onClick={() => openModal(<LogInForm closeModal={closeModal} />)}
            >
              Log In
            </Button>
            <Button
              type="button"
              variant="registration"
              onClick={() => openModal(<SignUpForm closeModal={closeModal} />)}
            >
              Registration
            </Button>
            {modalContent && (
              <FormModal modalIsOpen={!!modalContent} closeModal={closeModal}>
                {modalContent}
              </FormModal>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
