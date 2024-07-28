import React, { FC } from 'react';
import styles from './recipeCard.module.css';

interface RecipeCardProps {
  recipe: {
    id: number;
    title: string;
    image: string;
    category: string;
    ingredients: string[];
    instructions: string[];
    calories: number;
    time: number;
    tags: string[];
    bju: string[];
  };
}
const RecipeCard: FC <RecipeCardProps> = ({ recipe }) => {
  return (
    <a href="#" className={styles.recipeCard }>
      <img className={styles.image} src={recipe.image} alt="Картинка рецепта" />
      <h2 className={styles.title}>{recipe.title}</h2>
    </a>
  );
};

export default RecipeCard;
