import { useDispatch, useSelector } from 'react-redux';
import Filters from '../components/Filters/Filters';
import {
  selectFavHasFetched,
  selectFavHasMore,
  selectFavIsLoading,
  selectUniqueFavNannies,
} from '../redux/favorites/selectors';
import { getFavorites } from '../redux/favorites/operations';
import NanniesList from '../components/NanniesList/NanniesList';
import Button from '../components/Button/Button';
import { useLocation } from 'react-router-dom';
import { selectAuthUID } from '../redux/auth/selectors';
import InfoMessages from '../components/Messages/InfoMessages/InfoMessages';
import { useEffect } from 'react';
import Loader from '../components/Loader/Loader';

const FavoritesPage = () => {
  const { pathname } = useLocation();
  const isFavPage = pathname === '/favorites';
  const dispatch = useDispatch();
  const favorites = useSelector(selectUniqueFavNannies);
  const hasMore = useSelector(selectFavHasMore);
  const uid = useSelector(selectAuthUID);
  const isLoading = useSelector(selectFavIsLoading);
  const hasFetched = useSelector(selectFavHasFetched);

  useEffect(() => {
    if (uid) {
      if (!hasFetched && favorites.length === 0 && !isLoading) {
        dispatch(getFavorites({ uid }));
      }
    }
  }, [dispatch, isLoading, favorites, uid, hasFetched]);

  const loadMore = () => {
    if (hasMore && !isLoading) {
      dispatch(getFavorites({ uid }));
    }
  };
  return (
    <>
      <Filters isFavPage={isFavPage} />
      {isLoading && <Loader />}

      {!isLoading && favorites.length === 0 && (
        <InfoMessages message="You have not favorites nannies" />
      )}

      {favorites.length > 0 && <NanniesList nannies={favorites} />}
      {hasMore && favorites.length > 0 && (
        <Button type="button" variant="load-more" onClick={loadMore}>
          Load More
        </Button>
      )}
    </>
  );
};

export default FavoritesPage;
