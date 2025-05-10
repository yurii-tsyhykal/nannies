import FavoritesButton from '../FavoritesButton/FavoritesButton';
import css from './NannyListItemInfo.module.css';

const NannyListItemInfo = ({ nanny }) => {
  return (
    <ul className={css.info}>
      <li className={css.infoListItems}>
        <svg className={css.location} width={16} height={16}>
          <use href={'/images/sprite.svg#location'}></use>
        </svg>
        <span>{nanny.location}</span>
      </li>
      <li className={css.infoListItems}>
        <svg className={css.star} width={16} height={16}>
          <use href={'/images/sprite.svg#star'}></use>
        </svg>
        <span>Rating: {nanny.rating}</span>
      </li>
      <li className={css.infoListItems}>
        <span>Price / 1 hour: </span>
        <span className={css.priceText}>&nbsp;{nanny.price_per_hour}$</span>
      </li>
      <FavoritesButton nanny={nanny} />
    </ul>
  );
};

export default NannyListItemInfo;
