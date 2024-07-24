import React, { FC } from 'react';
import styles from './header.module.css';
// import { MdAccountCircle } from 'react-icons/md';
import logo from '../../image/icon/logo-header.png';
import Modal from '../modal/modal';
import RegisterForm from '../RegisterForm/RegisterForm';

const Header: FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  return (
    <div className={styles.header}>
      <a href="#" className={styles.logoContainer}>
        <img
          className={styles.logo}
          src={logo}
          alt="Книга рецептов иконки от Vectorslab - Flaticon"
        />
        <span className={styles.logoText}>Nourish Nook</span>
      </a>
      <ul className={styles.menu}>
        <li>
          <a href="#" className={styles.menuItem}>
            Главная
          </a>
        </li>
        <li>
          <a href="#" className={styles.menuItem}>
            Рецепты
          </a>
        </li>
        <li>
          <a href="#" className={styles.menuItem}>
            О нас
          </a>
        </li>
        <li>
          <a href="#" className={styles.menuItem}>
            Добавить рецепт
          </a>
        </li>
        <li>
          <a href="#" className={styles.menuItem}>
            Контакты
          </a>
        </li>
      </ul>
      {/* <a href="#" className={styles.userContainer}>
        <MdAccountCircle className={styles.userIcon} />
        <span className={styles.userName}>Личный кабинет</span>
      </a> */}
      
      <button className={styles.button} type="submit" onClick={() => setIsModalOpen(true)}>
        Зарегистрироваться
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <RegisterForm  onClose={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
};

export default Header;
