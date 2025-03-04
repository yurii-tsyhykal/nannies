import css from './ReviewsListItem.module.css';
import { FaStar } from 'react-icons/fa6';

const ReviewsListItem = ({ reviews }) => {
  return (
    <>
      <div className={css.profileWrapper}>
        <span className={css.avatar}>{reviews.reviewer[0]}</span>
        <h3 className={css.ReviewersName}>{reviews.reviewer}</h3>
        <span className={css.rating}>
          <FaStar
            fill="#ffc531"
            width={16}
            height={16}
            style={{ marginRight: '8px' }}
          />
          {reviews.rating.toFixed(1)}
        </span>
      </div>
      <p className={css.comment}>{reviews.comment}</p>
    </>
  );
};

export default ReviewsListItem;
