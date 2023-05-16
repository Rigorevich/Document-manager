import { statusUrl } from "../constants";

export const fetchStatuses = async () => {
  try {
    const response = await fetch(statusUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return await response.json();
  } catch (e) {
    alert("Не получилось получить статус документа");
  }
};

export const fetchStatusById = async (id) => {
  try {
    const response = await fetch(statusUrl + "/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return await response.json();
  } catch (e) {
    alert("Не получилось получить статус документа");
  }
};
