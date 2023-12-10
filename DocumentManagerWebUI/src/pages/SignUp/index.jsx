import React, { useState } from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { Link } from "react-router-dom";
import { roles } from "../../constants/roles";
import EmployeeForm from "../../components/Employee/EmployeeForm";
import StudentForm from "../../components/StudentForm";

const Signup = ({ isAdmin }) => {
  const [selectedRole, setSelectedRole] = useState(roles.STUDENT);

  const handleChange = (event) => {
    setSelectedRole(event.target.value);
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
              height: isAdmin ? "95vh" : "100vh",
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
                pb={1}
                color="initial"
                align="center"
                fontWeight="bold"
              >
                Регистрация
              </Typography>
              <Box
                sx={{
                  display: "flex",
                }}
                my={2}
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

              {selectedRole === roles.STUDENT ? (
                <StudentForm />
              ) : (
                <EmployeeForm />
              )}
              {!isAdmin && (
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
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Signup;
