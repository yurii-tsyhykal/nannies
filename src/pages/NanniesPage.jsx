import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectHasMore,
  selectLastKey,
  selectNannies,
} from '../redux/nannies/selectors';
import { useEffect, useRef } from 'react';
import { getNannies } from '../redux/nannies/operations';
import NanniesList from '../components/NanniesList/NanniesList';
import Button from '../components/Button/Button';
import Filters from '../components/Filters/Filters';

const NanniesPage = () => {
  const dispatch = useDispatch();
  const nannies = useSelector(selectNannies);
  const lastKey = useSelector(selectLastKey);
  const error = useSelector(selectError);
  const hasMore = useSelector(selectHasMore);
  const isFetched = useRef(false);
  console.log('nannies', nannies);
  console.log('lastKey', lastKey);

  useEffect(() => {
    if (isFetched.current) return;
    isFetched.current = true;
    dispatch(getNannies({ limit: 3, filter: 'name' }));
  }, [dispatch]);

  const loadMore = () => {
    if (hasMore) {
      dispatch(getNannies({ startKey: lastKey, limit: 3, filter: 'name' }));
    }
  };
  return (
    <>
      <Filters />
      {nannies.length && <NanniesList nannies={nannies} />}
      {hasMore && (
        <Button type="button" variant="load-more" onClick={loadMore}>
          Load More
        </Button>
      )}
    </>
  );
};

export default NanniesPage;
