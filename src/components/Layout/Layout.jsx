import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import css from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        <section>main {children}</section>
      </main>
    </div>
  );
};

export default Layout;
