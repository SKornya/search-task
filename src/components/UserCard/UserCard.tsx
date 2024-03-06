import { FunctionComponent } from 'react';

import './style.css';
import { User } from '../SearchResults/SearchContext';

export const UserCard: FunctionComponent<User> = ({
  image,
  firstName,
  lastName,
  address,
}) => {
  return (
    <div className="userCard">
      <img className="userPic" src={image} />
      <div className="userInfo">
        <div>{`${firstName} ${lastName}`}</div>
        <div>{address.city}</div>
      </div>
    </div>
  );
};
