import React, { useContext, useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import useFetch from "../../hooks/useFetch";
import { facultyUrl } from "../../constants";
import { putEmployee } from "../../api/fetchProfile";
import { AccountContext } from "../../context/AccountContext";

const EmployeeProfileForm = () => {
  const { data, loading, error } = useFetch(facultyUrl);
  const { account, setAccount } = useContext(AccountContext);
  const {
    accountId,
    employeeId,
    name,
    surname,
    phoneNumber,
    workbookNumber,
    facultyId,
    position,
  } = account;

  const [formData, setFormData] = useState({
    name,
    surname,
    phoneNumber,
    workbookNumber,
    facultyId,
    position,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = { ...formData, accountId, employeeId };
    const isNull = putEmployee(employeeId, body);
    if (isNull) {
      setAccount({ ...account, ...body });
      localStorage.setItem("user", JSON.stringify({ ...account, ...body }));
    }
  };
  return (
    <Container sx={{ my: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Ваш профиль
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Номер телефона"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Имя"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Фамилия"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Номер трудовой книжки"
              name="workbookNumber"
              value={formData.workbookNumber}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Факультет</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Факультет"
                value={formData.facultyId}
                onChange={(e) =>
                  setFormData({ ...formData, facultyId: e.target.value })
                }
              >
                {!loading &&
                  data?.map((item) => (
                    <MenuItem key={item.facultyId} value={item.facultyId}>
                      {item.name}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Должность"
              name="position"
              value={formData.position}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Сохранить
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default EmployeeProfileForm;
