import css from './NanniesListItem.module.css';

const NanniesListItem = ({ nanny }) => {
  return (
    <>
      <div className={css.nannyAvatar}>
        <img
          className={css.avatar}
          src={nanny.avatar_url}
          alt="Nanny’s avatar"
          width={96}
          height={96}
        />
      </div>
    </>
  );
};

export default NanniesListItem;
