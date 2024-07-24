import React, { FC, useState } from 'react';
import styles from './registerForm.module.css';
import { validateForm } from '../../utils/validatorForm';

type RegisterFormProps = {
  onClose: () => void;
};

const initialState = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  terms: false,
};

const RegisterForm: FC<RegisterFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<{
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    terms: boolean;
  }>(initialState);

  const [errors, setErrors] = useState({ ...initialState });

  // фукнция для обработки изменений
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // создаем новый объект , копиируя старый и добавляя новое свойство
    setFormData({ ...formData, [name]: value });
  };

  // фукнция для обработки изменений
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    // создаем новый объект , копиируя старый и добавляя новое свойство
    setFormData({ ...formData, [name]: checked });
  };

  // функция для отправки формы
  const handleSubmit = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (validateForm(formData)) {
      console.log('Форма успешно отправлена!', formData);
      // Очистка формы
      setFormData(initialState);
      // Закрытие модального окна
      onClose();
    } else {
      // Валидация ошибок
      setErrors({
        ...validationErrors,
        username: validationErrors.username ?? '',
        email: validationErrors.email ?? '',
        password: validationErrors.password ?? '',
        confirmPassword: validationErrors.confirmPassword ?? '',
        terms: validationErrors.terms ?? '',
      });
    }
    // const validationErrors = validateForm(formData);
    // if (Object.keys(validationErrors).length === 0) {
    //   // Отправка формы
    //   console.log('Форма успешно отправлена!', formData);
    //   // Очистка формы
    //   setFormData(initialState);
    //   // Закрытие модального окна
    //   onClose();
    // } else {
    //   // Валидация ошибок
    //   setErrors({
    //     ...validationErrors,
    //     username: validationErrors.username ?? '',
    //     email: validationErrors.email ?? '',
    //     password: validationErrors.password ?? '',
    //     confirmPassword: validationErrors.confirmPassword ?? '',
    //     terms: validationErrors.terms ?? '',
    //   });
    // }
  };

  return (
    <form className={styles.registerForm} onSubmit={handleSubmit}>
      <div className={styles.registerInputContainer}>
        <label htmlFor="username">Имя пользователя *</label>
        <input
          className={styles.registerInput}
          id="username"
          name="username"
          type="text"
          placeholder="Ваше имя"
          onChange={handleChange}
        />
        {errors.username && <p className={styles.error}>{errors.username}</p>}
      </div>
      <div className={styles.registerInputContainer}>
        <label htmlFor="email">Email *</label>
        <input
          className={styles.registerInput}
          id="email"
          name="email"
          type="email"
          placeholder="name@mail.com"
          onChange={handleChange}
        />
        {errors.email && <p className={styles.error}>{errors.email}</p>}
      </div>
      <div className={styles.registerInputContainer}>
        <label htmlFor="password">Пароль *</label>
        <input
          className={styles.registerInput}
          id="password"
          name="password"
          type="password"
          placeholder="Не менее 6 символов"
          onChange={handleChange}
        />
        {errors.password && <p className={styles.error}>{errors.password}</p>}
      </div>
      <div className={styles.registerInputContainer}>
        <label htmlFor="password">Подтвердите пароль *</label>
        <input
          className={styles.registerInput}
          name="confirmPassword"
          type="password"
          placeholder="Не менее 6 символов"
          onChange={handleChange}
        />
        {errors.confirmPassword && <p className={styles.error}>{errors.confirmPassword}</p>}
      </div>
      <div className={styles.termsContainer}>
        <input
          className={styles.termsInput}
          type="checkbox"
          name="terms"
          id="terms"
          aria-describedby="terms"
          checked={formData.terms}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="terms" className={styles.terms}>
          Я согласен с{' '}
          <a href="#" className={styles.termsLink}>
            Условиями использования
          </a>
        </label>
        {errors.terms && <p className={styles.error}>{errors.terms}</p>}
      </div>
      <button className={styles.registerButton} type="submit">
        Зарегистрироваться
      </button>
    </form>
  );
};

export default RegisterForm;
