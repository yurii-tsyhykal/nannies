import clsx from 'clsx';
import css from './ErrorMessage.module.css';

const ErrorMessage = ({ message, variant = null }) => {
  return <div className={clsx(css.errorMessage, variant === 'appointment' && css.appointment)}>{message}</div>;
};

export default ErrorMessage;
