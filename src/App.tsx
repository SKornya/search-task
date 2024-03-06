import { FunctionComponent, useState } from "react";
import { SearchForm } from "./components/SearchFrom/SearchForm";
import { SearchContext, User } from "./components/SearchResults/SearchContext";
import { SearchResults } from "./components/SearchResults/SearchResults";
import { mockUsers } from "./mockUsers";

const App: FunctionComponent = () => {
  const [users] = useState<User[]>(mockUsers);

  return (
    <SearchContext.Provider value={{ users }}>
      <SearchForm />
      <SearchResults />
    </SearchContext.Provider>
  );
}

export default App;
