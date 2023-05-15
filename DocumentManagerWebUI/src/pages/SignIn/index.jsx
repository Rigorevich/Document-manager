import React, { useContext } from "react";
import {
  Container,
  Grid,
  Button,
  Box,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { fetchAuth } from "../../api/fetchSignin";
import { AccountContext } from "../../context/AccountContext";

const SignIn = () => {
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { setAccount } = useContext(AccountContext);

  const handleClick = async () => {
    if (login.trim() && password.trim()) {
      const accountData = await fetchAuth({ login, password });
      if (accountData) {
        setAccount(accountData);
        localStorage.setItem("user", JSON.stringify(accountData));
      }
    }
  };

  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(45deg, #cfbcdf, #c7ebf0)",
          width: "100%",
        }}
      >
        <Container>
          <Grid
            container
            sx={{
              height: "100vh",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={5}
              lg={4}
              sx={{
                background: "white",
                boxShadow: 3,
                borderRadius: 3,
                p: 3,
                width: "100%",
              }}
            >
              <Typography
                variant="h4"
                pb={5}
                color="initial"
                align="center"
                fontWeight="bold"
              >
                Авторизация
              </Typography>
              <Box>
                <TextField
                  id="outlined-basic"
                  label="Логин"
                  variant="outlined"
                  fullWidth
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                />
              </Box>
              <Box my={3}>
                <TextField
                  id="outlined-basic"
                  label="Пароль"
                  variant="outlined"
                  type="password"
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
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
                  Войти
                </Button>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: 3,
                }}
              >
                <Box>
                  <p>
                    Нет аккаунта?{" "}
                    <Link to="/signup" style={{ textDecoration: "none" }}>
                      Зарегистрируйтесь
                    </Link>
                  </p>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default SignIn;
