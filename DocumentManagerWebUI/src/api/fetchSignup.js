import { baseUrl } from "../constants";

export const fetchSignup = async (body) => {
  try {
    const response = await fetch(`${baseUrl}/Account`, {
      method: "POST",
      body: JSON.stringify(body),
    });
    console.log(await response.json());
  } catch (e) {
    alert("Произошла ошибка на сервере", e.message);
  }
};
