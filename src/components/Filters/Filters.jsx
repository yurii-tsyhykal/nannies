import { filterStyles } from './FiltersStyles';
import { options } from '../../constants/filterOptions';
import Select from 'react-select';
import { useState } from 'react';

const Filters = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  console.log(selectedOption);
  
  return <>
  <p>Filters</p>
  <Select isSearchable={false}
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
          styles={filterStyles} 
          className='react' 
          classNamePrefix='select'
          isOptionDisabled={(option) => option.value === selectedOption?.value}
          />
  </>;
};

export default Filters;

{/* <form>
<p>Filters</p>
<List
  data={filtersArray}
  ListWrapper="select"
  ItemWrapper="option"
  renderItem={item => item}
  listClassName={css.selectList}
  itemClassName={css.optionItem}
/>
</form> */}