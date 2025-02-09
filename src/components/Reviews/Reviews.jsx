import css from './Reviews.module.css';
import { FaStar } from 'react-icons/fa6';

const Reviews = ({ reviews }) => {
  return (
    <ul className={css.reviewsList}>
      {reviews &&
        reviews.map((review, i) => (
          <li key={i}>
            <div className={css.profileWrapper}>
              <span className={css.avatar}>{review.reviewer[0]}</span>
              <h3 className={css.ReviewersName}>{review.reviewer}</h3>
              <span className={css.rating}>
                <FaStar
                  fill="#ffc531"
                  width={16}
                  height={16}
                  style={{ marginRight: '8px' }}
                />
                {review.rating.toFixed(1)}
              </span>
            </div>
            <p className={css.comment}>{review.comment}</p>
          </li>
        ))}
    </ul>
  );
};

export default Reviews;
