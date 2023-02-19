import { useSelector, useDispatch } from 'react-redux';
import { filterChange } from 'redux/store';

import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

    const handleFilter = event => {
      dispatch(filterChange(event.currentTarget.value));
  };

  return (
    <FilterLabel htmlFor="filter">
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilter}
        placeholder="Put the name for search"
      />
    </FilterLabel>
  );
};
