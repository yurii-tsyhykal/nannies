import clsx from 'clsx';
import css from './Loader.module.css';

const Loader = ({ variant }) => {
  return (
    <div
      className={clsx(
        css.loaderBox,
        variant === 'submit' && css.submit
      )}
    >
      <div className={css.posCenter}>
        <div className={css.loader}></div>
      </div>
    </div>
  );
};

export default Loader;
