// SearchBar component

// css
import { KeyboardEvent, useState } from "react";
import "../../css/searchBar.css";

type SearchBarProps = {
  modifySongs: (searchText: string) => void;
};

export default (props: SearchBarProps) => {
  const { modifySongs } = props;

  const [searchText, setSearchText] = useState("");

  const onKeyDownHandler = (e: KeyboardEvent) => {
    if (e.key === "Enter" && searchText) {
      modifySongs(searchText);
    }
  };

  return (
    <article className="search-bar">
      <div className="search-div">
        <span className="fa fa-search search-icon"></span>
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={onKeyDownHandler}
          placeholder="Search by artist, genre, name etc."
        />
        <span
          className="fa fa-close close-icon"
          onClick={() => setSearchText("")}
        ></span>
      </div>
    </article>
  );
};
