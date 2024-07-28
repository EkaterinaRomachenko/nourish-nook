import React, { FC } from 'react';
import styles from './recipeList.module.css';
import RecipeCard from '../RecipeCard/RecipeCard';

interface RecipeListProps {
  data: {
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
  }[];
}

const RecipeList: FC<RecipeListProps> = ({ data }) => {
  return (
    <div className={styles.recipeList}>
      {data.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
