import React from 'react';
import { useNavigate } from 'react-router-dom';
import Feature from '../Feature/Feature';
import Footer from '../Footer/Footer';
import NavBar from '../Navbar/Navbar';
import RandomDessert from '../Products/RandomDessert';
import styles from './Hero.module.css';

const Hero = () => {
  const navigate = useNavigate();

  const handleTryButton = () => {
    navigate('/recipe-make');
  };

  return (
    <div className={styles.HeroContainer}>
      <NavBar />
      <div className={styles.HeroContent}>
        <div className={styles.HeroItems}>
          <h1 className={styles.HeroH1}>unexpected recipe</h1>
          <p className={styles.HeroP}>your ingredients. our recipe</p>
          <button className={styles.HeroBtn} onClick={handleTryButton}>
            Give A Try
          </button>
        </div>
      </div>
      <Feature />
      <RandomDessert />
      <Footer />
    </div>
  );
};

export default Hero;