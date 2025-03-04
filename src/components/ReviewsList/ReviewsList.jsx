import List from '../List/List';
import ReviewsListItem from '../ReviewsListItem/ReviewsListItem';
import css from './ReviewsList.module.css';

const Reviews = ({ reviews }) => {
  return (
    <List
      data={reviews}
      renderItem={reviews => <ReviewsListItem reviews={reviews} />}
      listClassName={css.reviewsList}
    />
  );
};

export default Reviews;
