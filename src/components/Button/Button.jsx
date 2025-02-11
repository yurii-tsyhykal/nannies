import clsx from 'clsx';
import css from './Button.module.css';

const Button = ({ children, type, ...rest }) => {
  return (
    <button
      type="button"
      className={clsx(
        css.button,
        (type === 'login' && css.logInBtn) ||
        (type === 'registration' && css.registration) ||
        (type === 'load-more' && css.loadMore) ||
        (type === 'review' && css.review) ||
        (type === 'favorites' && css.favorites)
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
