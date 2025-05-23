import { Link, NavLink } from 'react-router-dom';
import css from './Header.module.css';
import Button from '../Button/Button';
import clsx from 'clsx';
import { lazy, Suspense, useState } from 'react';
import FormModal from '../FormModal/FormModal';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../../redux/auth/selectors';
import UserMenu from '../UserMenu/UserMenu';
import Loader from '../Loader/Loader';

const SignUpForm = lazy(() => import('../Forms/SignUpForm/SignUpForm'));
const LogInForm = lazy(() => import('../Forms/LogInForm/LogInForm'));

const Header = ({ type }) => {
  const [modalContent, setModalContent] = useState(null);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const openModal = content => {
    setModalContent(content);
  };
  const closeModal = () => {
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
      <div className={css.headerContainer}>
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
                <NavLink
                  className={({ isActive }) => clsx(isActive && css.activeLink)}
                  to="nannies"
                >
                  Nannies
                </NavLink>
              </li>
              {!type && isAuthenticated && (
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      clsx(isActive && css.activeLink)
                    }
                    to="favorites"
                  >
                    Favorites
                  </NavLink>
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
                onClick={() =>
                  openModal(<SignUpForm closeModal={closeModal} />)
                }
              >
                Registration
              </Button>
              {modalContent && (
                <FormModal modalIsOpen={!!modalContent} closeModal={closeModal}>
                  <Suspense fallback={<Loader />}>{modalContent}</Suspense>
                </FormModal>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
