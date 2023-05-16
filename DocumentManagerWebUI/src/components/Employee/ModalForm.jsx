import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const ModalForm = ({
  open,
  setOpen,
  fields,
  setFields,
  name,
  setName,
  description,
  setDescription,
  saveTemplate,
}) => {
  const handleClose = () => {
    setOpen(false);
  };

  const addField = () => {
    setFields([...fields, { label: "", value: "" }]);
  };

  const removeField = (index) => {
    const updatedFields = [...fields];
    updatedFields.splice(index, 1);
    setFields(updatedFields);
  };

  const handleFieldChange = (index, value) => {
    const updatedFields = [...fields];
    updatedFields[index].label = value;
    setFields(updatedFields);
  };

  return (
    <Box>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Форма</DialogTitle>
        <DialogContent>
          <Button variant="contained" onClick={addField} sx={{ mb: 2 }}>
            Добавить поле для заполнения студенту
          </Button>
          <Box sx={{ display: "flex", marginBottom: 1 }}>
            <TextField
              className="form-field"
              label="Название документа"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              margin="dense"
              variant="outlined"
            />
          </Box>
          <Box sx={{ display: "flex", marginBottom: 1 }}>
            <TextField
              className="form-field"
              label="Описание документа"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              fullWidth
              margin="dense"
              variant="outlined"
            />
          </Box>
          {fields.map(({ label, value }, index) => (
            <Box key={index} sx={{ display: "flex", marginBottom: 1 }}>
              <TextField
                className="form-field"
                label="Укажите название поля"
                value={label}
                onChange={(e) => handleFieldChange(index, e.target.value)}
                fullWidth
                margin="dense"
                variant="outlined"
                sx={{ mr: 1 }}
              />
              <IconButton
                aria-label="delete"
                onClick={() => removeField(index)}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={saveTemplate}>Сохранить</Button>
          <Button onClick={handleClose}>Закрыть</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ModalForm;
