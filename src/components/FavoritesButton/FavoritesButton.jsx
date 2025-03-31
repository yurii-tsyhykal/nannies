import css from './FavoritesButton.module.css';
import Button from '../Button/Button';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAuthUID,
  selectIsAuthenticated,
} from '../../redux/auth/selectors';
import { selectFavNannies } from '../../redux/favorites/selectors';
import { toggleFavorites } from '../../redux/favorites/operations';

const FavoritesButton = ({ nanny }) => {
  const dispatch = useDispatch();
  const uid = useSelector(selectAuthUID);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const favorites = useSelector(selectFavNannies);
  

  const isFavorite = favorites.some(item => item.id === nanny.id);

  const handleClick = () => {
    if (!uid || !isAuthenticated) return alert('login or registration');
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
          <use href="/public/images/sprite.svg#heart"></use>
        </svg>
      </Button>
    </>
  );
};

export default FavoritesButton;
