import {
  ChangeEvent,
  FormEvent,
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from 'react';
import './styles.css';
import { SearchContext } from '../SearchResults/SearchContext';
import useDebounce from '../../hooks/useDebounce';

// задержка для дебаунса
const DELAY = 1000;

export const SearchForm: FunctionComponent = () => {
  // состояние инпута
  const [inputValue, setInputValue] = useState<string>('');

  const { state, searchUsers } = useContext(SearchContext);

  const debouncedValue = useDebounce(inputValue, DELAY);

  // при изменении debouncedValue запрашиваем данные по апи
  useEffect(() => {
    const fetchData = async () => {
      if (debouncedValue) {
        await searchUsers(debouncedValue);
      }
    };

    fetchData();
  }, [debouncedValue]);

  // обработчик ввода текста в инпут
  const changeInputHandler = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setInputValue(value);
    // await searchUsers(debouncedValue);
  };

  // отменяем действие при нажатии enter
  const formSubmitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  // при ошибке блокируем инпут и показываем в нем текст ошибки
  return (
    <div className="searchForm">
      <form onSubmit={formSubmitHandler}>
        <input
          type="text"
          disabled={!!state.error}
          value={state.error || inputValue}
          onChange={changeInputHandler}
        />
      </form>
    </div>
  );
};
