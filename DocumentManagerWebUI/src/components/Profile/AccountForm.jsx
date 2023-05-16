import React, { useContext, useState } from "react";
import { TextField, Button, Typography, Container } from "@mui/material";
import { putAccount } from "../../api/fetchAccount";
import { AccountContext } from "../../context/AccountContext";

const AccountForm = () => {
  const { account, setAccount } = useContext(AccountContext);
  const {
    accountId,
    login: loginState,
    password: passwordState,
    role,
  } = account;
  console.log();
  const [login, setLogin] = useState(loginState);
  const [password, setPassword] = useState(passwordState);

  const handleLoginChange = (event) => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = { accountId, login, password, role };
    const isNull = putAccount(accountId, body);
    if (isNull) {
      setAccount({ ...account, ...body });
      localStorage.setItem("user", JSON.stringify({ ...account, ...body }));
    }
  };

  return (
    <Container sx={{ my: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Данные аккаунта
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Логин"
          variant="outlined"
          value={login}
          onChange={handleLoginChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Пароль"
          variant="outlined"
          value={password}
          onChange={handlePasswordChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Сохранить
        </Button>
      </form>
    </Container>
  );
};

export default AccountForm;
