import "./search-box.styles.css";

const SearchBox = ({ onSearchChangeHandler, placeholder, classname }) => {
  return (
    <>
      <input
        className={`search-box ${classname}`}
        type="search"
        placeholder={placeholder}
        onChange={onSearchChangeHandler}
      />
    </>
  );
};

/*class SearchBox extends Component {
  render() {
    const { onSearchChangeHandler, placeholder, classname } = this.props;

    return (
      <>
        <input
          className={`search-box ${classname}`}
          type="search"
          placeholder={placeholder}
          onChange={onSearchChangeHandler}
        />
      </>
    );
  }
}*/

export default SearchBox;
