import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  TextField,
  Box,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import useFetch from "../../hooks/useFetch";
import { templateUrl } from "../../constants";

const ModalApplication = ({
  open,
  setOpen,
  formData,
  setFormData,
  selectedTemplate,
  setSelectedTemplate,
  handleClickSent,
}) => {
  const { data: templates, loading, error } = useFetch(templateUrl);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setSelectedTemplate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
    handleClickSent();
  };

  const handleChangeFormData = (e, index) => {
    const updatedForm = [...formData];
    updatedForm[index].value = e.target.value;
    setFormData(updatedForm);
  };

  useEffect(() => {
    if (!loading && selectedTemplate) {
      setFormData(
        JSON.parse(
          templates?.find((item) => item.templateId === selectedTemplate).form
        )
      );
    }
  }, [selectedTemplate]);

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
            padding: "30px",
            borderRadius: "4px",
            width: "600px",
            maxWidth: "100%",
            margin: "15% auto",
          }}
        >
          <Typography variant="h5">Заполните заявку</Typography>
          <form className="modal-form" onSubmit={handleSubmit}>
            <FormControl fullWidth margin="normal">
              <InputLabel id="select-label">Тип документа</InputLabel>
              <Select
                labelId="select-label"
                id="select"
                name="option"
                required
                label="Тип документа"
                value={selectedTemplate}
                onChange={handleChange}
              >
                {loading ? (
                  <>Загрузка...</>
                ) : (
                  templates?.map((item) => (
                    <MenuItem value={item.templateId} key={item.templateId}>
                      {item.name}
                    </MenuItem>
                  ))
                )}
              </Select>
            </FormControl>
            {formData?.map((item, index) => (
              <TextField
                key={item.label}
                label={item.label}
                name={item.label}
                value={item.value}
                onChange={(e) => handleChangeFormData(e, index)}
                required
                fullWidth
                margin="normal"
              />
            ))}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2, fontWeight: "600" }}
            >
              Отправить
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalApplication;
