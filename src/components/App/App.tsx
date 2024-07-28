import React, { FC } from 'react';
import styles from './app.module.css';
import '../../vendor/normalize.css';
import Header from '../Header/Header';
import Home from '../../Pages/Home/Home';

const App: FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Home />
      </main>
    </div>
  );
};

export default App;
