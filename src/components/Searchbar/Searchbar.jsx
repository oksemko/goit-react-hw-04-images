import PropTypes from 'prop-types';
import { Component } from 'react';

import styles from './Searchbar.module.css';


export class Searchbar extends Component {
  static defaultProps = { onSubmit: null };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = {
    searchQuery: '',
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

  const { searchQuery } = this.state;
  const searchQueryNormalize = searchQuery.trim().toLowerCase();

if (!searchQueryNormalize) {
  return;
}

this.props.onSubmit(searchQueryNormalize);
this.setState({ searchQuery: '' });
};

render() {
  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
        <button type="submit" className={styles.SearchFormButton}>
          {/* <svg id="search-icon" viewBox="0 0 32 32" width="22" height="22">
          <path
            d="M13.4 6.693c-1.229 0.109-2.381 0.504-3.4 1.168-0.853 0.552-1.688 1.405-2.227 2.272-0.565 0.915-0.92 1.933-1.059 3.040-0.043 0.36-0.043 1.293 0 1.653 0.213 1.704 0.915 3.152 2.112 4.347 1.189 1.192 2.632 1.893 4.333 2.109 0.571 0.072 1.504 0.040 2.147-0.072 0.909-0.163 1.893-0.555 2.672-1.064l0.256-0.168 0.069 0.136c0.053 0.112 0.549 0.621 2.568 2.635 2.712 2.707 2.573 2.581 2.915 2.624 0.515 0.061 1.171-0.347 1.435-0.896 0.187-0.387 0.203-0.728 0.048-1.029-0.048-0.096-0.712-0.776-2.555-2.613-2.005-2.003-2.512-2.496-2.613-2.541l-0.125-0.053 0.197-0.307c1.248-1.955 1.499-4.371 0.675-6.539-0.371-0.979-0.907-1.803-1.675-2.571-1.163-1.165-2.597-1.875-4.227-2.091-0.389-0.051-1.184-0.072-1.547-0.040zM14.616 9.371c1.765 0.237 3.248 1.464 3.808 3.152 0.328 0.987 0.328 1.968 0 2.955-0.632 1.904-2.416 3.189-4.424 3.189-0.528 0-0.963-0.072-1.477-0.243-1.904-0.632-3.189-2.416-3.189-4.424 0-0.525 0.072-0.963 0.24-1.475 0.568-1.709 2.061-2.931 3.867-3.163 0.28-0.037 0.869-0.032 1.176 0.008z"
          ></path>
        </svg> */}
          <span className={styles.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={styles.SearchFormInput}
          type="text"
          name="searchQuery"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos ... 👀"
          value={this.state.searchQuery}
          onChange={this.handleInputChange}
        />
      </form>
    </header>
  );
  }
}
