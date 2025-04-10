import css from './InfoMessages.module.css';

const InfoMessages = ({ message }) => {
  return <p className={css.infoMessage}>{message}</p>;
};

export default InfoMessages;
