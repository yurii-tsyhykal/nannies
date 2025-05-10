import css from './ReviewsListItem.module.css';

const ReviewsListItem = ({ reviews }) => {
  return (
    <>
      <div className={css.profileWrapper}>
        <span className={css.avatar}>{reviews.reviewer[0]}</span>
        <h3 className={css.ReviewersName}>{reviews.reviewer}</h3>
        <span className={css.rating}>
          <svg className={css.star} width={16} height={16}>
            <use href={'/images/sprite.svg#star'}></use>
          </svg>
          {reviews.rating.toFixed(1)}
        </span>
      </div>
      <p className={css.comment}>{reviews.comment}</p>
    </>
  );
};

export default ReviewsListItem;
