import React from "react";
import { roles } from "../../constants/roles";
import AdminProfileForm from "./AdminProfileForm";
import EmployeeProfileForm from "./EmployeeProfileForm";
import StudentProfileForm from "./StudentProfileForm";

const ProfileForm = ({ account, setAccount, role }) => {
  if (role === roles.STUDENT) {
    return <StudentProfileForm {...account} />;
  } else if (role === roles.EMPLOYEE) {
    return <EmployeeProfileForm {...account} />;
  } else if (role === roles.ADMIN) {
    return <AdminProfileForm {...account} />;
  }
};

export default ProfileForm;
