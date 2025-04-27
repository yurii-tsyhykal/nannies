import css from './NanniesListItem.module.css';
import { FaStar } from 'react-icons/fa6';
import { GrLocation } from 'react-icons/gr';
import { useMemo, useState } from 'react';
import Reviews from '../ReviewsList/ReviewsList';
import Button from '../Button/Button';
import FavoritesButton from '../FavoritesButton/FavoritesButton';
import FormModal from '../FormModal/FormModal';
import MakeAnAppointmentForm from '../Forms/MakeAnAppointmentForm/MakeAnAppointmentForm';
import ageCalculate from '../../utils/ageCalc';
import charactersToUpper from '../../utils/CharactersToUpper';

const NanniesListItem = ({ nanny }) => {
  const [modalContent, setModalContent] = useState(null);
  const [visibleReviews, setVisibleReviews] = useState(false);

  const {
    avatar_url,
    name,
    location,
    rating,
    price_per_hour,
    birthday,
    experience,
    kids_age,
    characters,
    education,
    about,
    reviews,
  } = nanny;

  const age = useMemo(() => ageCalculate(birthday), [birthday]);

  const charactersMemo = useMemo(
    () => charactersToUpper(characters),
    [characters]
  );

  const openModal = content => {
    setModalContent(content);
  };
  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <>
      <div className={css.nannyAvatar}>
        <img
          className={css.avatar}
          src={avatar_url}
          alt="Nanny's avatar"
          width={96}
          height={96}
        />
      </div>
      <div className={css.nannyName}>
        <p className={css.role}>Nanny</p>
        <h2 className={css.name}>{name}</h2>
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
          {location}
        </p>
        <p className={css.rating}>
          <FaStar
            fill="#ffc531"
            width={16}
            height={16}
            style={{ marginRight: '8px' }}
          />
          Rating: {rating}
        </p>
        <p>
          Price / 1 hour:{' '}
          <span style={{ color: '#38cd3e' }}>{price_per_hour}$</span>
        </p>
        <FavoritesButton nanny={nanny} />
      </div>
      <ul className={css.profileList}>
        <li>
          Age: <span className={css.profileValue}>{age}</span>
        </li>
        <li>
          Experience: <span className={css.profileValue}>{experience}</span>
        </li>
        <li>
          Kids Age: <span className={css.profileValue}>{kids_age}</span>
        </li>
        <li>
          Characters: <span className={css.profileValue}>{charactersMemo}</span>
        </li>
        <li>
          Education: <span className={css.profileValue}>{education}</span>
        </li>
      </ul>
      <p className={css.about}>{about}</p>
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
          <Reviews reviews={reviews} />
          <Button
            type="button"
            variant="make-app"
            onClick={() =>
              openModal(
                <MakeAnAppointmentForm
                  closeModal={closeModal}
                  nanny={{ url: avatar_url, name: name }}
                />
              )
            }
          >
            Make an appointment
          </Button>
          {modalContent && (
            <FormModal
              modalIsOpen={!!modalContent}
              closeModal={closeModal}
              variant="appointment"
            >
              {modalContent}
            </FormModal>
          )}
        </>
      )}
    </>
  );
};

export default NanniesListItem;
