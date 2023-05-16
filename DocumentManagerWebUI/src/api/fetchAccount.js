import { accountUrl } from "../constants";

export const putAccount = async (accountId, body) => {
  try {
    const response = await fetch(accountUrl + "/" + accountId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      alert("Аккаунт успешно отредактирован!");
    } else {
      alert("Не получилось отредактировать аккаунт");
    }

    return await response.json();
  } catch (e) {
    console.log(e);
  }
};
