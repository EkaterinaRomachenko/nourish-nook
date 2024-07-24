import React, { FC } from 'react';
import styles from './mealSection.module.css';
import CategoriesRecipe from '../CategoriesRecipe/CategoriesRecipe';
import Search from '../Search/Search';

const MealSection: FC = () => {
  return (
    <div className={styles.mealSection}>
      <div className={styles.mealSectionContainer}>
        <CategoriesRecipe />
        <Search />
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default MealSection;
