import { ChangeEvent, ChangeEventHandler } from 'react';
import './search-box.styles.css';

type SearchBoxprops ={
  className: string,
  placeholder?: string,
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void,
  // onChangeHandler: ChangeEventHandler<HTMLInputElement>,
}

const SearchBox = ({ className, placeholder, onChangeHandler } : SearchBoxprops) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
