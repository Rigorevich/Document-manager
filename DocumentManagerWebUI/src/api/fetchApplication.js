import { applicationUrl } from "../constants";
import { fetchStatusById, fetchStatuses } from "./fetchStatus";
import { fetchTemplateById, fetchTemplates } from "./fetchTemplate";

export const fetchApplication = async (body) => {
  try {
    const response = await fetch(applicationUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    alert("Заявка успешно создана!");
    return await response.json();
  } catch (e) {
    alert("Не получилось создать шаблон документа");
  }
};

export const fetchApplications = async () => {
  try {
    const response = await fetch(applicationUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch (e) {
    alert("Не получилось получить заявки");
  }
};

export const fetchApplicationById = async (id) => {
  try {
    const response = await fetch(applicationUrl + "/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch (e) {
    alert("Не получилось получить заявки");
  }
};

export const getApplication = async () => {
  const result = [];
  const applications = await fetchApplications();
  const statuses = await fetchStatuses();
  const templates = await fetchTemplates();

  for (const application of applications) {
    const statusName = statuses.find(
      (item) => item.statusId === application.statusId
    ).name;
    const isTemplate = templates.find(
      (item) => item.templateId === application.templateId
    );

    result.push({
      ...application,
      statusName,
      templateName: isTemplate.name,
      templateDescription: isTemplate.description,
    });
  }

  return result;
};
