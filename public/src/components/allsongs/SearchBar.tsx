// SearchBar component
import { KeyboardEvent, useState } from "react";

// css
import "../../css/searchBar.css";

type SearchBarProps = {
  modifySongs: (searchText: string) => void;
};

export default (props: SearchBarProps) => {
  const { modifySongs } = props;

  const [searchText, setSearchText] = useState("");

  const onKeyDownHandler = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      modifySongs(searchText);
    }
  };

  return (
    <article className="search-bar">
      <div className="search-div">
        <span className="fa fa-search search-icon"></span>
        <input
          name="search-box"
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={onKeyDownHandler}
          placeholder="Search by artist, genre, name etc."
        />
        <span
          className={
            searchText
              ? "fa fa-close close-icon"
              : "fa fa-close close-icon invisible"
          }
          onClick={() => setSearchText("")}
        ></span>
      </div>
    </article>
  );
};
