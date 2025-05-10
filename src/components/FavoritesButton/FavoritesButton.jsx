import css from './FavoritesButton.module.css';
import Button from '../Button/Button';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAuthUID,
  selectIsAuthenticated,
} from '../../redux/auth/selectors';
import { selectIsNannyFavorite } from '../../redux/favorites/selectors';
import { toggleFavorites } from '../../redux/favorites/operations';
import { toast } from 'react-toastify';
import { TOAST_MESSAGES } from '../../helpers/constants';

const FavoritesButton = ({ nanny }) => {
  const dispatch = useDispatch();
  const uid = useSelector(selectAuthUID);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const isFavorite = useSelector(state =>
    selectIsNannyFavorite(state, nanny.id)
  );

  const handleClick = () => {
    if (!uid || !isAuthenticated) return toast.warn(TOAST_MESSAGES.FAV_BUTTON);
    dispatch(toggleFavorites({ uid, nanny }));
  };
  return (
    <>
      <Button type="button" variant="favorites" onClick={handleClick}>
        <svg
          width={26}
          height={26}
          className={clsx(css.heartIcon, isFavorite && css.heartIconActive)}
        >
          <use href="/images/sprite.svg#heart"></use>
        </svg>
      </Button>
    </>
  );
};

export default FavoritesButton;
