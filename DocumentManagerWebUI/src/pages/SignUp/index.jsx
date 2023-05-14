import React from "react";
import {
  Container,
  Grid,
  Button,
  Box,
  TextField,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { Link } from "react-router-dom";
import { roles } from "../../constants/roles";
import { fetchSignup } from "../../api/fetchSignup";
import { isValidLogin, isValidPassword } from "../../utils/validation";

const Signup = () => {
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [selectedRole, setSelectedRole] = React.useState(roles.STUDENT);

  const handleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleClick = () => {
    if (isValidLogin(login)) return;
    if (isValidPassword(password)) return;

    const body = { login, password, role: selectedRole };
    fetchSignup(body);
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
                Регистрация
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
              <Box my={2}>
                <TextField
                  id="outlined-basic"
                  label="Пароль"
                  variant="outlined"
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                }}
                my={1}
              >
                <RadioGroup
                  sx={{ display: "flex", flexDirection: "row" }}
                  value={selectedRole}
                  onChange={handleChange}
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value={roles.STUDENT}
                    control={<Radio />}
                    label="Студент"
                  />
                  <FormControlLabel
                    value={roles.EMPLOYEE}
                    control={<Radio />}
                    label="Работник деканата"
                  />
                </RadioGroup>
              </Box>
              <Box
                sx={{
                  background: "#0288d1",
                  color: "#fff",
                  p: 0.4,
                  borderRadius: "4px",
                }}
              >
                <Button fullWidth sx={{ color: "white" }} onClick={handleClick}>
                  Зарегистрироваться
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
                <p>
                  Есть аккаунт?{" "}
                  <Link to="/signin" style={{ textDecoration: "none" }}>
                    Войдите
                  </Link>
                </p>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Signup;
