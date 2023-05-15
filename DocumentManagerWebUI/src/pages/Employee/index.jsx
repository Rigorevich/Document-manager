import React, { useContext } from "react";
import { AccountContext } from "../../context/AccountContext";
import { employeePages } from "../../constants/pages";
import Header from "../../components/Header";

export default function Employee() {
  const { account, setAccount } = useContext(AccountContext);

  return (
    <>
      <Header pages={employeePages} />
      <div>Employee</div>
    </>
  );
}
