import { FunctionComponent, useContext } from 'react';
import { SearchContext, User } from './SearchContext';
import { UserCard } from '../UserCard/UserCard';

import './style.css';

export const SearchResults: FunctionComponent = () => {
  const { state } = useContext(SearchContext);
  const { users, loading } = state;

  // показываем лоадер во время загрузки данных
  return (
    <div className="usersList">
      {!loading
        ? users.map((user: User) => <UserCard {...user} key={user.id} />)
        : 'Loading...'}
    </div>
  );
};
