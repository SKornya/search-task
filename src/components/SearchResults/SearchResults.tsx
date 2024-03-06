import { FunctionComponent, useContext } from "react";
import { SearchContext, User } from "./SearchContext";
import { UserCard } from "../UserCard/UserCard";

import "./style.css";

export const SearchResults: FunctionComponent = () => {
  const { users } = useContext(SearchContext);

  return (
    <div className="usersList">
      {users.map((user: User) => (
        <UserCard {...user} />
      ))}
    </div>
  );
}
