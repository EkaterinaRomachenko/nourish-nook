import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import styles from './home.module.css';
import Banner from '../../components/Banner/Banner';
import CategoriesRecipe from '../../components/CategoriesRecipe/CategoriesRecipe';
import Search from '../../components/Search/Search';
import RecipeList from '../../components/RecipeList/RecipeList';

const Home: FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://669e51709a1bda368006374b.mockapi.io/recipes/recipes',
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.home}>
      <Banner />
      <div className={styles.homeContainer}>
        <CategoriesRecipe />
        <Search />
      </div>
      <RecipeList data={data} />
    </div>
  );
};

export default Home;
