// SearchBar component

// css
import "../../css/searchBar.css";

type SearchBarProps = {
  changeSearchText: any;
  clearSerchText: any;
  searchText: string;
  checkIfEnterPressed: any;
};

export default (props: SearchBarProps) => {
  const { changeSearchText, clearSerchText, searchText, checkIfEnterPressed } =
    props;

  return (
    <article className="search-bar">
      <div className="search-div">
        <span className="fa fa-search search-icon"></span>
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={changeSearchText}
          onKeyPress={checkIfEnterPressed}
          placeholder="Search by artist, genre, name etc"
        />
        <span
          className="fa fa-close close-icon"
          onClick={clearSerchText}
        ></span>
      </div>
    </article>
  );
};
