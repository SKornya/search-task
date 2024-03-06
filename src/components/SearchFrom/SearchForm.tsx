import { ChangeEvent, FormEvent, FunctionComponent, useState } from 'react';
import './styles.css';

export const SearchForm: FunctionComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const changeInputHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  const formSubmitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  return (
    <div className="searchForm">
      <form onSubmit={formSubmitHandler}>
        <input type="text" value={inputValue} onChange={changeInputHandler} />
      </form>
    </div>
  );
};
