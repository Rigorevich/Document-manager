export const isValidLogin = (login) => {
  if (login.length < 5) {
    alert("Логин не должен быть меньше 5 символов");
    return true;
  }
  return false;
};

export const isValidPassword = (password) => {
  if (password.length < 6) {
    alert("Пароль не надежный");
    return true;
  }
  return false;
};
