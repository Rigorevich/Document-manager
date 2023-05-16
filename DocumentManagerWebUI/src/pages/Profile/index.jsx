import React, { useContext } from "react";
import { AccountContext } from "../../context/AccountContext";
import { choosingPages } from "../../utils";
import { Container } from "@mui/material";
import Header from "../../components/Header";
import AccountForm from "../../components/Profile/AccountForm";
import ProfileForm from "../../components/Profile/ProfileForm";

export default function Profile() {
  const { account, setAccount } = useContext(AccountContext);

  return (
    <>
      <Header pages={choosingPages(account.role)} />
      <Container maxWidth="sm" sx={{ paddingTop: "25px" }}>
        <AccountForm
          loginState={account.login}
          passwordState={account.password}
          accountId={account.accountId}
          role={account.role}
        />
        <ProfileForm
          account={account}
          setAccount={setAccount}
          role={account.role}
        />
      </Container>
    </>
  );
}
