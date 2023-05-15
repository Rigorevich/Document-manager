export const getProfileUrl = (role) => {
  switch (role) {
    case "admin":
      return "/Administrator";
    case "student":
      return "/Student";
    case "employee":
      return "/Employee";
    default:
      return;
  }
};
