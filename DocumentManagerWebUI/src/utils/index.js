import { roles } from "../constants/roles";
import { adminPages, employeePages } from "../constants/pages";

export const choosingPages = (role) => {
  switch (role) {
    case roles.STUDENT:
      return;
    case roles.EMPLOYEE:
      return employeePages;
    case roles.ADMIN:
      return adminPages;
    default:
      return;
  }
};
