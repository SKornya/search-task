import { FunctionComponent, useState } from 'react';
import { SearchForm } from './components/SearchFrom/SearchForm';
import {
  IState,
  SearchContext,
  User,
} from './components/SearchResults/SearchContext';
import { SearchResults } from './components/SearchResults/SearchResults';

const API_URL = 'https://dummyjson.com/users/search?q=';

const App: FunctionComponent = () => {
  const [state, setState] = useState<IState>({
    loading: false,
    error: null,
    users: [],
  });

  // запрос данных с апи
  const searchUsers = async (query: string): Promise<void> => {
    try {
      console.log(query);

      setState({ ...state, loading: true });

      const response = await fetch(`${API_URL}${query}`);

      if (!response.ok) {
        setState({
          ...state,
          error: `Error with status code: ${response.status}`,
        });
      } else {
        const data: { users: User[] } = await response.json();
        setState({ loading: false, error: null, users: data.users });
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setState({
          loading: false,
          users: [],
          error: `Error! ${error.message}`,
        });
      }
    }
  };

  return (
    <SearchContext.Provider value={{ state, searchUsers }}>
      <SearchForm />
      <SearchResults />
    </SearchContext.Provider>
  );
};

export default App;
