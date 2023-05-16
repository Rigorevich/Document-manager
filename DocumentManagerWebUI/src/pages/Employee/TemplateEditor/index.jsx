import React, { useState } from "react";
import TextEditor from "../../../components/Employee/TextEditor";
import Header from "../../../components/Header";
import { Box, Button } from "@mui/material";
import { employeePages } from "../../../constants/pages";
import ModalForm from "../../../components/Employee/ModalForm";
import { fetchTemplate } from "../../../api/fetchTemplate";

const TemplateEditor = () => {
  const [templateHtml, setTemplateHtml] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [fields, setFields] = useState([]);

  const [open, setOpen] = useState(false);

  const clearState = () => {
    setTemplateHtml("");
    setName("");
    setDescription("");
    setFields([]);
  };

  const saveTemplate = () => {
    const body = {
      description,
      name,
      form: JSON.stringify(fields.filter((item) => item)),
      templateHtml,
    };

    if (!name || !description || !templateHtml) {
      alert("Заполните все поля!");
      return;
    }
    fetchTemplate(body);
    clearState();
  };

  return (
    <>
      <Header pages={employeePages} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextEditor
          templateHtml={templateHtml}
          setTemplateHtml={setTemplateHtml}
        />
        <Button
          variant="success"
          sx={{ width: "200px" }}
          onClick={() => setOpen((prev) => !prev)}
        >
          Сохранить шаблон
        </Button>
      </Box>
      <ModalForm
        open={open}
        setOpen={setOpen}
        fields={fields}
        setFields={setFields}
        name={name}
        setName={setName}
        description={description}
        setDescription={setDescription}
        saveTemplate={saveTemplate}
      />
    </>
  );
};

export default TemplateEditor;
