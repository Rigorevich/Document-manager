import React, { useContext, useState } from "react";
import { TextField, Button, Grid, Typography, Container } from "@mui/material";
import { AccountContext } from "../../context/AccountContext";
import { putAdmin } from "../../api/fetchProfile";

const AdminProfileForm = () => {
  const { account, setAccount } = useContext(AccountContext);
  const { accountId, administratorId, name, surname, phoneNumber } = account;

  const [formData, setFormData] = useState({
    name,
    surname,
    phoneNumber,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value, account);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = { ...formData, accountId, administratorId };
    const isNull = putAdmin(administratorId, body);
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

export default AdminProfileForm;
