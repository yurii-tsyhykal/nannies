import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loaderBox}>
      <div className={css.posCenter}>
        <div className={css.loader}></div>
      </div>
    </div>
  );
};

export default Loader;
