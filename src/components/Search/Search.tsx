import React, { FC } from 'react';
import { MdOutlineSearch } from 'react-icons/md';
import styles from './search.module.css';

const Search: FC = () => {
  return (
    <div className={styles.search}>
      <MdOutlineSearch className={styles.searchIcon} />
      <input
        className={styles.searchInput}
        name="search"
        type="text"
        placeholder="Поиск рецептов"
      />
    </div>
  );
};

export default Search;
