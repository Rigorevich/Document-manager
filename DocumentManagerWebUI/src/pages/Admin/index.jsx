import React, { useContext } from "react";
import { AccountContext } from "../../context/AccountContext";

import Header from "../../components/Header";
import AdminControl from "../../components/AdminControl";

export default function Admin() {
  const { account, setAccount } = useContext(AccountContext);

  return (
    <>
      <Header />
      <AdminControl />
    </>
  );
}
