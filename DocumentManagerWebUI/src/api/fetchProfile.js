import { adminUrl, employeeUrl, studentUrl } from "../constants";

export const putEmployee = async (profileId, body) => {
  try {
    const response = await fetch(employeeUrl + "/" + profileId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      alert("Профиль успешно отредактирован!");
    } else {
      alert("Не получилось отредактировать Профиль");
    }

    return await response.json();
  } catch (e) {
    console.log(e);
  }
};

export const putStudent = async (profileId, body) => {
  try {
    const response = await fetch(studentUrl + "/" + profileId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      alert("Профиль успешно отредактирован!");
    } else {
      alert("Не получилось отредактировать Профиль");
    }

    return await response.json();
  } catch (e) {
    console.log(e);
  }
};

export const putAdmin = async (profileId, body) => {
  try {
    const response = await fetch(adminUrl + "/" + profileId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      alert("Профиль успешно отредактирован!");
    } else {
      alert("Не получилось отредактировать Профиль");
    }

    return await response.json();
  } catch (e) {
    console.log(e);
  }
};
