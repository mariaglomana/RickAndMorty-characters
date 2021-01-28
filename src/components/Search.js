import React from "react";

const Search = props => {
  const handleSearchSubmit = event => {
    event.preventDefault();
  };
  const handleSearchText = event => {
    props.handleSearchText(event.target.value);
  };
  return (
    <form onSubmit={handleSearchSubmit} className="search__form">
      <div>
        <label htmlFor="search" />
        <input
          type="text"
          id="search"
          name="search"
          className="search__input-text"
          ref={props.searchText}
          onChange={handleSearchText}
          placeholder="Busca un personaje..."
        />
      </div>

      <ul className="search__by-gender">
        <h3>Filtrar por género:</h3>
        <li key="male">
          <label htmlFor="male">
            <input
              id="male"
              type="radio"
              value="male"
              checked={props.gender === "male"}
              onChange={props.handleChangeGender}
            />
            <span className="search__by-gender--input-radio">Hombre</span>
          </label>
        </li>
        <li key="female">
          <label htmlFor="female">
            <input
              id="female"
              type="radio"
              value="female"
              checked={props.gender === "female"}
              onChange={props.handleChangeGender}
            />
            <span className="search__by-gender--input-radio">Mujer</span>
          </label>
        </li>
      </ul>
    </form>
  );
};

export default Search;
