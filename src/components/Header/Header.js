import React from 'react'
import styles from './Header.module.scss'
import SearchBar from '../SearchBar/SearchBar'

function Header({title = 'My App', setSearchQuery}) {
  return (
    // <div className='header'>
    <div className={styles.header}>
        <div className={styles.title}>{title}</div>
        <SearchBar setSearchQuery={setSearchQuery} />
    </div>
  )
}

export default Header