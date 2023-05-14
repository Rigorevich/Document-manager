import { baseUrl } from "../constants";

export const fetchSignup = async (body) => {
  try {
    const response = await fetch(`${baseUrl}/Account`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log(responseData);
    } else if (response.status === 409) {
      alert('Аккаунт с таким логином уже зарегистрирован!');
    }
  } catch (e) {
    alert("Произошла ошибка на сервере", e);
    console.log(e)
  }
};
