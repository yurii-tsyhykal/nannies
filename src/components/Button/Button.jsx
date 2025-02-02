import clsx from 'clsx';
import css from './Button.module.css';

const Button = ({ children, type, ...rest }) => {
  return (
    <button
      className={clsx(
        css.button,
        (type === 'login' && css.logInBtn) ||
          (type === 'registration' && css.registration)
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
