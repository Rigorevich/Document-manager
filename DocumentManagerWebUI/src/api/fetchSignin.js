import { baseUrl } from "../constants";
import { getProfileUrl } from "../utils/profileUrl";

export const getProfiles = async (url = `${baseUrl}/Account`) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      return await response.json();
    } else if (response.status === 404) {
      alert("Аккаунты не найден");
    } else if (response.status === 500) {
      alert("Возникла ошибка на сервере");
    }
  } catch (e) {
    console.log(e);
  }
};

export const fetchAuth = async ({ login, password }) => {
  const accounts = await getProfiles();
  const authAccount = accounts.find(
    (obj) => obj.login === login && obj.password === password
  );

  if (authAccount) {
    const url = baseUrl + getProfileUrl(authAccount?.role);
    const profiles = await getProfiles(url);
    const authProfile = profiles.find(
      (obj) => obj.accountId === authAccount?.accountId
    );

    if (authProfile) {
      alert("Вы успешно авторизовались!");
      return { ...authProfile, ...authAccount };
    }
  }

  alert("Неверный логин или пароль");
  return null;
};
