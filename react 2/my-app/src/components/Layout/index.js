import React from 'react';
import styles from './layout.module.css';

const Layout = ({children}) => {
  return (
    <div>
        <header className={styles.header}>
            <h1 className={styles.title}>MCGA 2022</h1>
        </header>
        {children}
        <footer>
            <label>2022</label>
        </footer>
    </div>
  )
}

export default Layout