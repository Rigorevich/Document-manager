import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import History from "../../components/Student/History";
import ModalApplication from "../../components/Student/ModalApplication";
import { Container, Box, Button } from "@mui/material";
import { AccountContext } from "../../context/AccountContext";
import { fetchApplication, getApplication } from "../../api/fetchApplication";

export default function Student() {
  const { account, setAccount } = useContext(AccountContext);
  const [open, setOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [formData, setFormData] = useState([]);
  const [applications, setApplications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await getApplication();
      setApplications(data);
      setIsLoading(false);
      console.log(data);
    })();
  }, []);

  const handleClickSent = () => {
    const body = {
      content: JSON.stringify(formData),
      statusId: 1,
      templateId: selectedTemplate,
      studentId: account.studentId,
    };
    fetchApplication(body);
  };

  return (
    <>
      <Header />
      <Container maxWidth="xl" sx={{ py: 5 }}>
        <Button
          onClick={() => setOpen((prev) => !prev)}
          variant="contained"
          sx={{ marginBottom: "10px", fontWeight: "600" }}
        >
          Создать заявку
        </Button>
        {isLoading ? (
          <Box align="center">Загрузка</Box>
        ) : (
          <History applications={applications} />
        )}
      </Container>
      <ModalApplication
        open={open}
        setOpen={setOpen}
        selectedTemplate={selectedTemplate}
        setSelectedTemplate={setSelectedTemplate}
        formData={formData}
        setFormData={setFormData}
        handleClickSent={handleClickSent}
      />
    </>
  );
}
