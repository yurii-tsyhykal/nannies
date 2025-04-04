import { useDispatch, useSelector } from 'react-redux';
import Filters from '../components/Filters/Filters';
import {
  selectFavHasMore,
  selectFavNannies,
} from '../redux/favorites/selectors';
import { useEffect, useRef } from 'react';
import { getFavorites } from '../redux/favorites/operations';
import NanniesList from '../components/NanniesList/NanniesList';
import Button from '../components/Button/Button';
import { useLocation } from 'react-router-dom';
import { selectAuthUID } from '../redux/auth/selectors';

const FavoritesPage = () => {
  const { pathname } = useLocation();
  const isFavPage = pathname === '/favorites';
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavNannies);
  const isFetched = useRef(false);
  const hasMore = useSelector(selectFavHasMore);
  const uid = useSelector(selectAuthUID);
  console.log(favorites);
  

  // useEffect(() => {
  //   if (isFetched.current) return;
  //   if (favorites.length === 0) {
  //     isFetched.current = true;
  //     dispatch(getFavorites({ uid }));
  //   }
  // }, [dispatch, favorites.length, uid]);
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
        <p>We have not nannies now</p>
      )}
      {hasMore && (
        <Button type="button" variant="load-more" onClick={loadMore}>
          Load More
        </Button>
      )}
    </>
  );
};

export default FavoritesPage;
