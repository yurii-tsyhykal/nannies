import { filterStyles } from './FiltersStyles';
import { OPTIONS } from '../../helpers/constants';
import Select from 'react-select';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/nannies/selectors';
import { setNannyFilter } from '../../redux/nannies/slice';
import { getNannies } from '../../redux/nannies/operations';
import css from './Filters.module.css';
import { selectFavFilter } from '../../redux/favorites/selectors';
import { setFavFilter } from '../../redux/favorites/slice';
import { getFavorites } from '../../redux/favorites/operations';
import { selectAuthUID } from '../../redux/auth/selectors';

const Filters = ({ isFavPage }) => {
  const dispatch = useDispatch();
  const NannyFilter = useSelector(selectFilter);
  const favFilter = useSelector(selectFavFilter);
  const uid = useSelector(selectAuthUID);
  const filter = isFavPage ? favFilter : NannyFilter;
  const defaultFilter = OPTIONS.find(i => i?.value === filter);
  const [selectedOption, setSelectedOption] = useState(defaultFilter);

  const handleChangeOnNannies = value => {
    setSelectedOption(value);
    dispatch(setNannyFilter(value.value));
    dispatch(getNannies());
  };
  const handleChangeOnFavs = value => {
    setSelectedOption(value);
    dispatch(setFavFilter(value.value));
    dispatch(getFavorites({ uid }));
  };

  return (
    <>
      <p className={css.filtersText}>Filters</p>
      <Select
        isSearchable={false}
        value={selectedOption}
        onChange={isFavPage ? handleChangeOnFavs : handleChangeOnNannies}
        options={OPTIONS}
        styles={filterStyles}
        isOptionDisabled={option => option.value === selectedOption?.value}
      />
    </>
  );
};

export default Filters;
