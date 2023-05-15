import { baseUrl } from "../constants";
import { getProfileUrl } from "../utils/profileUrl";

export const fetchCreate = async (body, url = `${baseUrl}/Account`) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      return await response.json();
    } else if (response.status === 409) {
      alert("Аккаунт с таким логином уже зарегистрирован!");
    }
  } catch (e) {
    alert("Произошла ошибка на сервере");
  }
};

export const fetchSignup = async (account, profile) => {
  const url = baseUrl + getProfileUrl(account.role);
  const resAccount = await fetchCreate(account);
  const resProfile = await fetchCreate(
    {
      ...profile,
      accountId: resAccount?.accountId,
    },
    url
  );

  return { ...resAccount, ...resProfile };
};
