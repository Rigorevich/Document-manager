import { baseUrl } from "../constants";

export const fetchSignin = async () => {
  try {
    const response = await fetch(`${baseUrl}/Account`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      return await response.json();
    } else if (response.status === 404) {
      alert('Аккаунт не найден');
    } else if (response.status === 500) {
        alert('Возникла ошибка на сервере');
    }
  } catch (e) {
    console.log(e)
  }
};
