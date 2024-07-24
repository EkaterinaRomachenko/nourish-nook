import react, { FC } from 'react';
import styles from './banner.module.css';
import bannerImg from '../../image/banner.jpg';
import { FaArrowDownLong } from 'react-icons/fa6';

const Banner: FC = () => {
  return (
    <div className={styles.banner}>
      <img className={styles.bannerImg} src={bannerImg} alt=" Картинка баннера" />
      <div className={styles.bannerTextContainer}>
        <h1 className={styles.bannerText}>Здоровое питание – ваш ключ к активной жизни!</h1>
        <a href="#">
          <FaArrowDownLong className={styles.bannerArrow} />
        </a>
      </div>
    </div>
  );
};

export default Banner;
