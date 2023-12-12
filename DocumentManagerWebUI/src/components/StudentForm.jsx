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
import { groupUrl } from "../constants";
import { isValidLogin, isValidPassword } from "../utils/validation";
import { roles } from "../constants/roles";

import useFetch from "../hooks/useFetch";
import { fetchSignup } from "../api/fetchSignup";

export default function StudentForm() {
  const { data, loading, error } = useFetch(groupUrl);
  const [forms, setForms] = useState([
    { id: 1, value: "", label: "Логин" },
    { id: 2, value: "", label: "Пароль" },
    { id: 3, value: "", label: "Имя" },
    { id: 4, value: "", label: "Фамилия" },
    { id: 5, value: "", label: "Номер телефона" },
    { id: 6, value: "", label: "Номер студенческого" },
  ]);
  const [group, setGroup] = useState("");

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
      role: roles.STUDENT,
    };
    const profile = {
      name: forms[2].value,
      surname: forms[3].value,
      phoneNumber: forms[4].value,
      studentCardId: forms[5].value,
      groupId: group,
    };
    const user = await fetchSignup(account, profile);
    // localStorage.setItem("user", JSON.stringify(user));
    alert("Акканут успешно зарегистрирован!");
    window.location.reload();
  };

  return (
    <div>
      {forms.map((component) => (
        <Box key={component.id} my={2}>
          <TextField
            id={`outlined-basic-${component.id}`}
            label={component.label}
            variant="outlined"
            fullWidth
            size="small"
            value={component.value}
            onChange={(e) => handleChange(component.id, e.target.value)}
          />
        </Box>
      ))}
      <Box my={2}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Группа</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={group}
            label="Группа"
            onChange={(e) => setGroup(e.target.value)}
          >
            {loading ? (
              <div>Loading...</div>
            ) : (
              data?.map(({ groupId, groupNumber }) => (
                <MenuItem key={groupId} value={groupId}>
                  {groupNumber}
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
    </div>
  );
}
