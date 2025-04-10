import { useDispatch, useSelector } from 'react-redux';
import Filters from '../components/Filters/Filters';
import {
  selectFavHasMore,
  selectFavNannies,
} from '../redux/favorites/selectors';
import { getFavorites } from '../redux/favorites/operations';
import NanniesList from '../components/NanniesList/NanniesList';
import Button from '../components/Button/Button';
import { useLocation } from 'react-router-dom';
import { selectAuthUID } from '../redux/auth/selectors';
import InfoMessages from '../components/Messages/InfoMessages/InfoMessages';

const FavoritesPage = () => {
  const { pathname } = useLocation();
  const isFavPage = pathname === '/favorites';
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavNannies);
  const hasMore = useSelector(selectFavHasMore);
  const uid = useSelector(selectAuthUID);
  console.log(favorites);

  const loadMore = () => {
    if (hasMore) {
      dispatch(getFavorites({ uid }));
    }
  };
  return (
    <>
      <Filters isFavPage={isFavPage} />
      {favorites.length ? (
        <NanniesList nannies={favorites} />
      ) : (
        <InfoMessages message="You have not favorites nannies" />
      )}
      {hasMore && favorites.length && (
        <Button type="button" variant="load-more" onClick={loadMore}>
          Load More
        </Button>
      )}
    </>
  );
};

export default FavoritesPage;
