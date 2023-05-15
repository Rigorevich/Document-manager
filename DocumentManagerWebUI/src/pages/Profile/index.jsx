import React, { useContext } from "react";
import { AccountContext } from "../../context/AccountContext";
import { getProfileUrl } from "../../utils/profileUrl";
import Header from "../../components/Header";
import ProfileBlock from "../../components/Profile";
import useFetch from "../../hooks/useFetch";

export default function Profile() {
  const { account, setAccount } = useContext(AccountContext);

  console.log(account);

  return (
    <>
      <Header />
      Profile
      {/*{loading ? <div>Загрузка...</div> : <ProfileBlock />}*/}
    </>
  );
}
