import css from './NanniesListItem.module.css';
import { IoLocationOutline } from 'react-icons/io5';
import { FaStar } from 'react-icons/fa6';
import ageCalculate from '../../utils/ageCalc';
import charactersToUpper from '../../utils/CharactersToUpper';

const NanniesListItem = ({ nanny }) => {
  const age = ageCalculate(nanny.birthday);
  const characters = charactersToUpper(nanny.characters);

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
      <div className={css.nannyName}>
        <p className={css.role}>Nanny</p>
        <h2 className={css.name}>{nanny.name}</h2>
      </div>
      <div className={css.info}>
        <p className={css.location}>
          <IoLocationOutline
            className={css.locationIcon}
            width={16}
            height={16}
            strokeWidth={1.5}
            style={{ marginRight: '8px' }}
          />
          {nanny.location}
        </p>
        <p className={css.rating}>
          <FaStar
            fill="#ffc531"
            width={16}
            height={16}
            style={{ marginRight: '8px' }}
          />
          Rating: {nanny.rating}
        </p>
        <p>
          Price / 1 hour:{' '}
          <span style={{ color: '#38cd3e' }}>{nanny.price_per_hour}$</span>
        </p>
      </div>
      <ul>
        <li style={{ color: 'black' }}>Age: {age}</li>
        <li style={{ color: 'black' }}>Experience: {nanny.experience}</li>
        <li style={{ color: 'black' }}>Kids Age: {nanny.kids_age}</li>
        <li style={{ color: 'black' }}>Characters: {characters}</li>
        <li style={{ color: 'black' }}>Education: {nanny.education}</li>
      </ul>
    </>
  );
};

export default NanniesListItem;
