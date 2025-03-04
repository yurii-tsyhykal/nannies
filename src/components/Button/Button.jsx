import clsx from 'clsx';
import css from './Button.module.css';

const Button = ({ children, type, variant, ...rest }) => {
  return (
    <button
      type={type}
      className={clsx(
        css.button,
        ( variant=== 'login' && css.logInBtn) ||
        ( variant=== 'registration' && css.registration) ||
        ( variant=== 'load-more' && css.loadMore) ||
        ( variant=== 'review' && css.review) ||
        ( variant=== 'favorites' && css.favorites)
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
