import { FunctionComponent } from "react";
import "./styles.css";

export const SearchForm: FunctionComponent = () => {
  return (
    <div className="searchForm">
      <form>
        <input type="text" value="Terry" />
      </form>
    </div>
  );
}
