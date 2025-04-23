import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import css from './Layout.module.css';
import clsx from 'clsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';

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
