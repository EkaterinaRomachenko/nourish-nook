import React, { FC } from 'react';
import styles from './app.module.css';
import '../../vendor/normalize.css';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import MealSection from '../MealSection/MealSection';

const App: FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Banner />
        <MealSection />
      </main>
    </div>
  );
};

export default App;
