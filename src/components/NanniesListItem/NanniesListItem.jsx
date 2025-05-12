import css from './NanniesListItem.module.css';
import React, { lazy, Suspense, useMemo, useState } from 'react';
import Button from '../Button/Button';
import FormModal from '../FormModal/FormModal';
import ageCalculate from '../../utils/ageCalc';
import charactersToUpper from '../../utils/CharactersToUpper';
import NannyListItemInfo from '../NannyListItemInfo/NannyListItemInfo';
import Loader from '../Loader/Loader';

const MakeAnAppointmentForm = lazy(() =>
  import('../Forms/MakeAnAppointmentForm/MakeAnAppointmentForm')
);

const Reviews = lazy(() => import('../ReviewsList/ReviewsList'));

const NanniesListItem = ({ nanny }) => {
  const [modalContent, setModalContent] = useState(null);
  const [visibleReviews, setVisibleReviews] = useState(false);

  const {
    avatar_url,
    name,
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
          loading="lazy"
          alt="Nanny's avatar"
          width={96}
          height={96}
        />
      </div>
      <div className={css.nannyName}>
        <p className={css.role}>Nanny</p>
        <h2 className={css.name}>{name}</h2>
      </div>
      <NannyListItemInfo nanny={nanny} />

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
              <Suspense fallback={<Loader />}>{modalContent}</Suspense>
            </FormModal>
          )}
        </>
      )}
    </>
  );
};

export default React.memo(NanniesListItem);
