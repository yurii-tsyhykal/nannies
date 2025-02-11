import { useState } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa6';
import css from './FavoritesButton.module.css';
import Button from '../Button/Button';

const FavoritesButton = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <Button type="favorites" onClick={() => setIsActive(prev => !prev)}>
        {isActive ? (
          <FaHeart className={css.heartIconActive} />
        ) : (
          <FaRegHeart className={css.heartIcon} />
        )}
      </Button>
    </>
  );
};

export default FavoritesButton;
