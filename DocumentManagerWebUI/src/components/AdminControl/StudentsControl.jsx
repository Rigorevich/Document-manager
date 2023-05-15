import React from "react";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import useFetch from "../../hooks/useFetch";
import { baseUrl } from "../../constants";

export default function StudentsControl() {
  const { data, loading, error } = useFetch(baseUrl + "/Student");

  if (loading) return <div>Загрузка...</div>;

  if (error) return <div>Произошла ошибка...</div>;

  return (
    <>
      <Typography
        variant="h4"
        pb={1}
        color="black"
        align="start"
        fontWeight="bold"
      >
        Студенты
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Имя</TableCell>
              <TableCell>Фамилия</TableCell>
              <TableCell>Номер телефона</TableCell>
              <TableCell>Факультет</TableCell>
              <TableCell>Специальность</TableCell>
              <TableCell>Группа</TableCell>
              <TableCell>Группа</TableCell>
              <TableCell>Номер студенческого</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.surname}</TableCell>
                <TableCell>{user.phoneNumber}</TableCell>
                <TableCell>Факультет</TableCell>
                <TableCell>Специальность</TableCell>
                <TableCell>Группа</TableCell>
                <TableCell>Группа</TableCell>
                <TableCell>Номер студенческого</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
