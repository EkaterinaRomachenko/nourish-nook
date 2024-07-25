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

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    const validationErrors = validateForm(formData);
    const { username, email, password, confirmPassword, terms } = formData;
    if (username && email && password && confirmPassword && terms) {
      // Отправка формы
      console.log('Форма успешно отправлена!', formData);
      setFormData(initialState);
      setErrors(errors);
      onClose();
    } else {
      // Валидация ошибок
      setErrors(validationErrors);
    }
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
          value={formData.username}
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
          value={formData.email}
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
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className={styles.error}>{errors.password}</p>}
      </div>
      <div className={styles.registerInputContainer}>
        <label htmlFor="confirmPassword">Подтвердите пароль *</label>
        <input
          id="confirmPassword"
          className={styles.registerInput}
          name="confirmPassword"
          type="password"
          placeholder="Не менее 6 символов"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <p className={styles.error}>{errors.confirmPassword}</p>}
      </div>
      <div className={styles.termsContainer}>
        <div className={styles.termsInputContainer}>
          <input
            className={styles.termsInput}
            type="checkbox"
            name="terms"
            id="terms"
            aria-describedby="terms"
            checked={formData.terms}
            onChange={handleChange}
          />
          <label htmlFor="terms" className={styles.terms}>
            Я согласен с{' '}
            <a href="#" className={styles.termsLink}>
              Условиями использования
            </a>
          </label>
        </div>
        {errors.terms && <p className={styles.error}>{errors.terms}</p>}
      </div>
      <button className={styles.registerButton} type="submit">
        Зарегистрироваться
      </button>
    </form>
  );
};

export default RegisterForm;
