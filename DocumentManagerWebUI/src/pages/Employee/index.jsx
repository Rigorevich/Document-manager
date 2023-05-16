import React, { useContext } from "react";
import { AccountContext } from "../../context/AccountContext";
import { employeePages } from "../../constants/pages";
import { Container, Box } from "@mui/material";
import Header from "../../components/Header";
import useFetch from "../../hooks/useFetch";
import TemplateList from "../../components/Employee/TemplateList";
import { templateUrl } from "../../constants";

export default function Employee() {
  const { account, setAccount } = useContext(AccountContext);
  const { data, loading, error } = useFetch(templateUrl);

  if (error) {
    return <Box align="center">Произошла ошибка...</Box>;
  }

  if (loading) {
    return <Box align="center">Загрузка...</Box>;
  }

  return (
    <>
      <Header pages={employeePages} />
      <Container maxWidth="xl" sx={{ paddingTop: "30px" }}>
        <TemplateList templates={data} />
      </Container>
    </>
  );
}
