export const commonForms = [
  {
    label: "Логин",
  },
  {
    label: "Пароль",
  },
  {
    label: "Имя",
  },
  {
    label: "Фамилия",
  },
  {
    label: "Номер телефона",
  },
];

export const forms = {
  student: [
    ...commonForms,
    {
      label: "Номер студенческого",
    },

    {
      label: "Номер группы",
    },
  ],
  employee: [
    ...commonForms,
    {
      label: "Должность",
    },

    {
      label: "Факультет",
    },
    {
      label: "Номер трудовой книжки",
    },
  ],
  admin: [...commonForms],
};

export const studentForms = [
  { id: 1, value: "", label: "Логин" },
  { id: 2, value: "", label: "Пароль" },
  { id: 3, value: "", label: "Имя" },
  { id: 4, value: "", label: "Фамилия" },
  { id: 5, value: "", label: "Номер телефона" },
  { id: 6, value: "", label: "Номер студенческого" },
];
