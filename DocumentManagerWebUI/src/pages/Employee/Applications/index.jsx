import React from "react";
import Header from "../../../components/Header";
import { employeePages } from "../../../constants/pages";
import { Container } from "@mui/material";
import ApplicationTable from "../../../components/Employee/ApplicationTable";

const Applications = () => {
  return (
    <>
      <Header pages={employeePages} />
      <Container maxWidth="xl">
        <ApplicationTable />
      </Container>
    </>
  );
};

export default Applications;
