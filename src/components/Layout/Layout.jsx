import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import css from './Layout.module.css';
import clsx from 'clsx';

const Layout = () => {
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';
  return (
    <div className={clsx(css.layoutWrapper)}>
      <Header type={isHomePage} />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
