import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectHasMore,
  selectLastKey,
  selectNannies,
} from '../redux/nannies/selectors';
import { useEffect } from 'react';
import { getNannies } from '../redux/nannies/operations';
import NanniesList from '../components/NanniesList/NanniesList';

const NanniesPage = () => {
  const dispatch = useDispatch();
  const nannies = useSelector(selectNannies);
  const lastKey = useSelector(selectLastKey);
  const error = useSelector(selectError);
  const hasMore = useSelector(selectHasMore);
  console.log('nannies', nannies);
  console.log('lastKey', lastKey);
  console.log(error);

  useEffect(() => {
    dispatch(getNannies({ limit: 3 }));
  }, [dispatch]);
  const loadMore = () => {
    if (hasMore) {
      dispatch(getNannies({ startKey: lastKey, limit: 3 }));
    }
  };
  return (
    <>
      {nannies.length && <NanniesList nannies={nannies} />}
      {hasMore && (
        <button type="button" onClick={loadMore}>
          Load More
        </button>
      )}
    </>
  );
};

export default NanniesPage;
