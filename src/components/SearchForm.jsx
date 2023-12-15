import { useEffect, useState } from 'react';
import { useSearchStr } from '../lib/useSearchStr';
import { CustomRadio } from './CustomRadio';

const SearchForm = ({ onSearch }) => {
  // const [searchStr, setSearchStr] = useState('');
  const [searchStr, setSearchStr] = useSearchStr();
  const [searchOption, setSearchOption] = useState('shows');

  console.log('COMPONENT RERENDER');

  useEffect(() => {
    console.log('COMPONENT MOUNTS');
    return () => {
      console.log('BEFORE NEXT USEEFFECT RUN');
    };
  }, []);

  const onSearchInputChange = ev => {
    setSearchStr(ev.target.value);
  };

  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };

  const onSubmit = ev => {
    ev.preventDefault();
    const options = {
      q: searchStr,
      searchOption,
    };

    onSearch(options);
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={searchStr} onChange={onSearchInputChange} />
      <CustomRadio
        label="Shows"
        type="radio"
        name="search-option"
        value="shows"
        checked={searchOption === 'shows'}
        onChange={onRadioChange}
      />
      <CustomRadio
        label="Actors"
        type="radio"
        name="search-option"
        value="actors"
        checked={searchOption === 'actors'}
        onChange={onRadioChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
