import { useDispatch, useSelector } from 'react-redux';
import {
  // selectError,
  selectHasMore,
  selectNannies,
} from '../redux/nannies/selectors';
import { useEffect, useRef } from 'react';
import { getNannies } from '../redux/nannies/operations';
import NanniesList from '../components/NanniesList/NanniesList';
import Button from '../components/Button/Button';
import Filters from '../components/Filters/Filters';
import InfoMessages from '../components/Messages/InfoMessages/InfoMessages';

const NanniesPage = () => {
  const dispatch = useDispatch();
  const nannies = useSelector(selectNannies);
  // const error = useSelector(selectError);
  const hasMore = useSelector(selectHasMore);
  const isFetched = useRef(false);
  console.log('nannies', nannies);

  useEffect(() => {
    if (isFetched.current) return;
    if (nannies.length === 0) {
      isFetched.current = true;

      dispatch(getNannies());
      console.log('home');
    }
  }, [dispatch, nannies]);

  const loadMore = () => {
    if (hasMore) {
      dispatch(getNannies());
    }
  };
  return (
    <>
      <Filters />
      {nannies.length > 0 ? (
        <NanniesList nannies={nannies} />
      ) : (
        <InfoMessages message="We have not nannies now" />
      )}
      {hasMore && nannies.length && (
        <Button type="button" variant="load-more" onClick={loadMore}>
          Load More
        </Button>
      )}
    </>
  );
};

export default NanniesPage;
