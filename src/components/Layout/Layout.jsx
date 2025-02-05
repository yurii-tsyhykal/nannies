import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import css from './Layout.module.css';
import clsx from 'clsx';

const Layout = () => {
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';
  console.log(isHomePage);

  return (
    <div className={clsx(css.layoutWrapper, !isHomePage && css.layoutWrapperNotHome)}>
      <Header type={isHomePage} />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
