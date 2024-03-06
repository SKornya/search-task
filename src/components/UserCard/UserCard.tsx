import { FunctionComponent } from 'react';

import './style.css';

interface UserCardProps {
  image: string;
  firstName: string;
  lastName: string;
  address: {
    city: string;
  }
}

export const UserCard: FunctionComponent<UserCardProps> = ({ image, firstName, lastName, address }) => {

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
