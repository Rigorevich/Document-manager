import { templateUrl } from "../constants";

export const fetchTemplate = async (body, url = templateUrl) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    alert("Шаблон успешно заполнен!");
    return await response.json();
  } catch (e) {
    alert("Не получилось создать шаблон документа");
  }
};

export const fetchTemplates = async () => {
  try {
    const response = await fetch(templateUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return await response.json();
  } catch (e) {
    alert("Не получилось создать шаблон документа");
  }
};

export const fetchTemplateById = async (id) => {
  try {
    const response = await fetch(templateUrl + "/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return await response.json();
  } catch (e) {
    alert("Не получилось получить документ");
  }
};
