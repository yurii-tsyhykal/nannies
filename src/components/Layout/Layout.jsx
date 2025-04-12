import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import css from './Layout.module.css';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthUID } from '../../redux/auth/selectors';
import { getFavorites } from '../../redux/favorites/operations';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';
  const uid = useSelector(selectAuthUID);

  useEffect(() => {
    if (uid) {
      dispatch(getFavorites({ uid }));
    }
  }, [dispatch, uid]);

  return (
    <div
      className={clsx(
        css.layoutWrapper,
        !isHomePage && css.layoutWrapperNotHome
      )}
    >
      <Header type={isHomePage} />
      <main>
        <Outlet />
      </main>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default Layout;
