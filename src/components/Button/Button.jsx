import clsx from 'clsx';
import css from './Button.module.css';

const variantClasses = {
  login: css.logInBtn,
  registration: css.registration,
  'load-more': css.loadMore,
  review: css.review,
  favorites: css.favorites,
  'signUp-logIn-modals': css.signUpLogInModals,
  'close-modal': css.closeModal,
  logOut: css.logOut,
  'make-app': css.makeAppointment,
  'send-app': css.sendAppointment,
};

const Button = ({ children, type, variant, ...rest }) => {
  return (
    <button
      type={type}
      className={clsx(css.button, variantClasses[variant])}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
