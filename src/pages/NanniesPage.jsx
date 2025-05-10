import { useDispatch, useSelector } from 'react-redux';
import {
  selectHasMore,
  selectIsLoading,
  selectUniqueNannies,
} from '../redux/nannies/selectors';
import { useEffect } from 'react';
import { getNannies } from '../redux/nannies/operations';
import NanniesList from '../components/NanniesList/NanniesList';
import Button from '../components/Button/Button';
import Filters from '../components/Filters/Filters';
import InfoMessages from '../components/Messages/InfoMessages/InfoMessages';
import Loader from '../components/Loader/Loader';

const NanniesPage = () => {
  const dispatch = useDispatch();
  const nannies = useSelector(selectUniqueNannies);
  const hasMore = useSelector(selectHasMore);
  const isLoading = useSelector(selectIsLoading);


  useEffect(() => {
    if (nannies.length === 0 && !isLoading) {
      dispatch(getNannies());
    }
  }, [dispatch, isLoading, nannies.length]);

  const loadMore = () => {
    if (hasMore && !isLoading) {
      dispatch(getNannies());
    }
  };
  return (
    <>
      <Filters />
      {isLoading && <Loader />}
      {!isLoading && nannies.length === 0 && (
        <InfoMessages message="We have not nannies now" />
      )}
      {nannies.length > 0 && <NanniesList nannies={nannies} />}
      {hasMore && nannies.length && (
        <Button type="button" variant="load-more" onClick={loadMore}>
          Load More
        </Button>
      )}
    </>
  );
};

export default NanniesPage;
