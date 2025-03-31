import css from './NanniesListItem.module.css';
import { FaStar } from 'react-icons/fa6';
import { GrLocation } from 'react-icons/gr';
import ageCalculate from '../../utils/ageCalc';
import charactersToUpper from '../../utils/CharactersToUpper';
import { useState } from 'react';
import Reviews from '../ReviewsList/ReviewsList';
import Button from '../Button/Button';
import FavoritesButton from '../FavoritesButton/FavoritesButton';
import FormModal from '../FormModal/FormModal';
import { selectIsAuthenticated } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import MakeAnAppointmentForm from '../Forms/MakeAnAppointmentForm/MakeAnAppointmentForm';

const NanniesListItem = ({ nanny }) => {
  const [modalContent, setModalContent] = useState(null);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const [visibleReviews, setVisibleReviews] = useState(false);
  const age = ageCalculate(nanny.birthday);
  const characters = charactersToUpper(nanny.characters);

  const openModal = content => {
    console.log('modal is open');
    setModalContent(content);
  };
  const closeModal = () => {
    console.log('modal is close');
    setModalContent(null);
  };

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
          <GrLocation
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
        <FavoritesButton nanny={nanny} />
      </div>
      <ul className={css.profileList}>
        <li>
          Age: <span className={css.profileValue}>{age}</span>
        </li>
        <li>
          Experience:{' '}
          <span className={css.profileValue}>{nanny.experience}</span>
        </li>
        <li>
          Kids Age: <span className={css.profileValue}>{nanny.kids_age}</span>
        </li>
        <li>
          Characters: <span className={css.profileValue}>{characters}</span>
        </li>
        <li>
          Education: <span className={css.profileValue}>{nanny.education}</span>
        </li>
      </ul>
      <p className={css.about}>{nanny.about}</p>
      {!visibleReviews ? (
        <Button
          type="button"
          variant="review"
          onClick={() => setTimeout(() => setVisibleReviews(true), 300)}
        >
          Read more
        </Button>
      ) : (
        <>
          <Reviews reviews={nanny.reviews} />
          <Button
            type="button"
            variant="make-app"
            onClick={() =>
              openModal(
                <MakeAnAppointmentForm
                  closeModal={closeModal}
                  nanny={{ url: nanny.avatar_url, name: nanny.name }}
                />
              )
            }
          >
            Make an appointment
          </Button>
          {modalContent && (
            <FormModal modalIsOpen={!!modalContent} closeModal={closeModal} variant='appointment'>
              {modalContent}
            </FormModal>
          )}
        </>
      )}
    </>
  );
};

export default NanniesListItem;
