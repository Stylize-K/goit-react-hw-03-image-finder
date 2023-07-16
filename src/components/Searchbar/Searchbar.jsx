import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {};

  render() {
    return (
      <header class={css.searchBar}>
        <form class={css.searchForm}>
          <button type="submit" class={css.searchFormButton}>
            <span class={css.searchFormButtonLabel}>Search</span>
          </button>
          <input
            class={css.searchFormInput}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
