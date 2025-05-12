import { NavLink } from 'react-router-dom';
import css from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={css.NotFoundWrapper}>
      <h1 className={css.notFoundTitle}>
        Oops! Page not found... We couldn&apos;t find the page you&apos;re
        looking for.
      </h1>
      <p className={css.notFoundDesc}>
        Maybe the nanny just went for a walk with the little one.
      </p>
      <NavLink className={css.notFoundBack} to="/">Return to home page</NavLink>
    </div>
  );
};

export default NotFound;
