import { createContext } from 'react';

export interface User {
  id: number;
  image: string;
  firstName: string;
  lastName: string;
  address: {
    city: string;
  };
}

export interface IState {
  loading: boolean;
  error: string | null;
  users: User[];
}

export interface ISearchContext {
  state: IState;
  searchUsers: (query: string) => void;
}

export const SearchContext = createContext<ISearchContext>({
  state: {
    loading: false,
    error: null,
    users: [],
  },
  searchUsers: () => {},
});
