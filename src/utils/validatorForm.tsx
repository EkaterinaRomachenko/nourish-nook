// валидация формы
export const validateForm = (formData: {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}) => {
  const errors: {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    terms: boolean ;
  } = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false, 
  }
  if (!formData.username) {
    errors.username = 'Имя обязательно!';
  }
  if (!formData.email) {
    errors.email = 'Email обязателен!';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = 'Email некорректен!';
  }
  if (!formData.password) {
    errors.password = 'Пароль обязателен!';
  } else if (formData.password.length < 6) {
    errors.password = 'Пароль должен содержать не менее 6 символов';
  }
  if (formData.password !== formData.confirmPassword) {
    errors.confirmPassword = 'Пароли не совпадают!';
  }
  if (!formData.terms) {
    errors.terms = false;
    console.log(errors.terms);
  }
  return errors;
};
