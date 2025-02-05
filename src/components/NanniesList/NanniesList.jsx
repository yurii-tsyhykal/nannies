import NanniesListItem from '../NanniesListItem/NanniesListItem';
import css from './NanniesList.module.css';

const NanniesList = ({ nannies }) => {
  return (
    <ul className={css.nanniesList}>
      {nannies.map(nanny => (
        <li key={nanny.id} className={css.listItem}>
          <NanniesListItem nanny={nanny} />
        </li>
      ))}
    </ul>
  );
};

export default NanniesList;
