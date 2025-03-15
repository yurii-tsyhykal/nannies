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
      {nannies.length ? (
        <NanniesList nannies={nannies} />
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

export default NanniesPage;
