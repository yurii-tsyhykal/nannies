import { filterStyles } from './FiltersStyles';
import { options } from '../../constants/filterOptions';
import Select from 'react-select';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/nannies/selectors';
import { setFilter } from '../../redux/nannies/slice';
import { getNannies } from '../../redux/nannies/operations';

const Filters = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const defaultFilter = options.find(i => i?.value === filter);
  const [selectedOption, setSelectedOption] = useState(defaultFilter);
  const handleChange = (value) => {
    setSelectedOption(value)
    dispatch(setFilter(value.value));
    dispatch(getNannies());
  };
  
  return <>
  <p>Filters</p>
  <Select isSearchable={false}
          value={selectedOption}
          onChange={handleChange}
          options={options}
          styles={filterStyles} 
          isOptionDisabled={(option) => option.value === selectedOption?.value}
          />
  </>;
};

export default Filters;