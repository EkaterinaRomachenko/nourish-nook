import React, { FC } from 'react';
import styles from './categoriesRecipe.module.css';

const CategoriesRecipe: FC = () => {
  return (
    <ul className={styles.categoriesRecipe}>
      <li className={styles.categoriesRecipeItem}>Все категории</li>
      <li className={styles.categoriesRecipeItem}>Завтрак</li>
      <li className={styles.categoriesRecipeItem}>Обед</li>
      <li className={styles.categoriesRecipeItem}>Ужин</li>
      <li className={styles.categoriesRecipeItem}>Десерт</li>
      <li className={styles.categoriesRecipeItem}>Вегетарианское</li>
      <li className={styles.categoriesRecipeItem}>Веганское</li>
    </ul>
  );
};

export default CategoriesRecipe;
