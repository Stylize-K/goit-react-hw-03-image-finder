import { Component } from 'react';
import { FcSearch } from 'react-icons/fc';
// import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {};

  render() {
    return (
      <header className={css.searchBar}>
        <form className={css.searchForm}>
          <button type="submit" className={css.searchFormButton}>
            <FcSearch size={'2em'} />
          </button>
          <input
            className={css.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
