import React, { useState } from "react";
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { facultyUrl } from "../../constants";
import { isValidLogin, isValidPassword } from "../../utils/validation";
import { roles } from "../../constants/roles";

import useFetch from "../../hooks/useFetch";
import { fetchSignup } from "../../api/fetchSignup";
import { useNavigate } from "react-router-dom";

export default function EmployeeForm() {
  const { data, loading, error } = useFetch(facultyUrl);
  const [forms, setForms] = useState([
    { id: 1, value: "", label: "Логин" },
    { id: 2, value: "", label: "Пароль" },
    { id: 3, value: "", label: "Имя" },
    { id: 4, value: "", label: "Фамилия" },
    { id: 5, value: "", label: "Номер телефона" },
    { id: 6, value: "", label: "Номер трудовой книжки" },
    { id: 7, value: "", label: "Должность" },
  ]);
  const [faculty, setFaculty] = useState("");
  const navigate = useNavigate();

  const handleChange = (id, newValue) => {
    setForms((prevComponents) =>
      prevComponents.map((component) =>
        component.id === id ? { ...component, value: newValue } : component
      )
    );
  };

  const handleClick = async () => {
    if (isValidLogin(forms[0].value)) return;
    if (isValidPassword(forms[1].value)) return;
    if (forms.some((obj) => obj.value.trim() === "")) {
      alert("Заполните все поля!");
      return;
    }

    const account = {
      login: forms[0].value,
      password: forms[1].value,
      role: roles.EMPLOYEE,
    };
    const profile = {
      name: forms[2].value,
      surname: forms[3].value,
      phoneNumber: forms[4].value,
      workbookNumber: forms[5].value,
      position: forms[6].value,
      facultyId: faculty,
    };
    const user = await fetchSignup(account, profile);
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/");
  };

  return (
    <>
      {forms.map((component) => (
        <Box key={component.id} my={2}>
          <TextField
            id={`outlined-basic-${component.id}`}
            label={component.label}
            variant="outlined"
            fullWidth
            value={component.value}
            onChange={(e) => handleChange(component.id, e.target.value)}
          />
        </Box>
      ))}
      <Box my={2}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Факультет</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={faculty}
            label="Факультет"
            onChange={(e) => setFaculty(e.target.value)}
          >
            {loading ? (
              <div>Loading...</div>
            ) : (
              data?.map(({ facultyId, name }) => (
                <MenuItem key={facultyId} value={facultyId}>
                  {name}
                </MenuItem>
              ))
            )}
          </Select>
        </FormControl>
      </Box>
      <Box
        sx={{
          background: "#0288d1",
          color: "#fff",
          p: 0.4,
          borderRadius: "4px",
        }}
      >
        <Button
          fullWidth
          sx={{ color: "white", fontWeight: "600" }}
          onClick={handleClick}
        >
          Зарегистрироваться
        </Button>
      </Box>
    </>
  );
}
