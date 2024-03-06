import { createContext } from "react";

export interface User {
  image: string;
  firstName: string;
  lastName: string;
  address: {
    city: string;
  };
}

export const SearchContext = createContext<{ users: User[] }>({ users: [] });
