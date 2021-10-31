import styles from './Searchbar.module.css'
import PropTypes from 'prop-types';
import { useState } from 'react';
export function Searchbar(props) {
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    setValue(e.currentTarget.value)
    }
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(value)
  }
    return <header className={styles.searchbar}>
      <form className={styles.SearchForm} onSubmit = {handleSubmit}>
        <button type="submit" className={styles.SearchButton}>
          <span className={styles.SearchFormLabel}>Search</span>
    </button>
    <input
      className={styles.SearchFormInput}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      onChange = {handleChange}
    />
  </form>
</header>
    }
Searchbar.propTypes = {
  onSubmit:PropTypes.func,
}