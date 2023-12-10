import React, { useEffect, useState } from "react";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { studentUrl, adminUrl, employeeUrl, accountUrl } from "../../constants";

export default function StudentsControl() {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      Promise.all([
        fetch(studentUrl).then((res) => res.json()),
        fetch(employeeUrl).then((res) => res.json()),
        fetch(adminUrl).then((res) => res.json()),
      ]).then((values) => {
        console.log(values);
        setData([...values[0], ...values[1], ...values[2]]);
      });
    } catch {
      alert("Произошла ошибка при получении данных");
    }
  }, []);

  const handleClickDelete = (accountId) => {
    if (window.confirm("Вы уверены, что хотите удалить профиль?")) {
      try {
        fetch(accountUrl + "/" + accountId, {
          method: "DELETE",
        }).then(() => {
          setData(data.filter((item) => item.accountId !== accountId));
        });
      } catch {
        alert("Произошла ошибка при удалении данных");
      }
    }
  };

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
              <TableCell>№</TableCell>
              <TableCell>Имя</TableCell>
              <TableCell>Фамилия</TableCell>
              <TableCell>Должность/Статус</TableCell>
              <TableCell>Номер телефона</TableCell>
              <TableCell>Номер трудовой книжки</TableCell>
              <TableCell>Номер студенческого</TableCell>
              <TableCell>Удаление профиля</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map(
              (
                {
                  employeeId,
                  studentId,
                  adminId,
                  name,
                  surname,
                  phoneNumber,
                  studentCardId,
                  workbookNumber,
                  position,
                  accountId,
                },
                key
              ) => {
                return (
                  <TableRow key={key}>
                    <TableCell>#{key}</TableCell>
                    <TableCell>{name}</TableCell>
                    <TableCell>{surname}</TableCell>
                    <TableCell>
                      {position
                        ? `${position}/Работник деканата`
                        : studentId
                        ? `Студент`
                        : `Администратор`}
                    </TableCell>
                    <TableCell>{phoneNumber}</TableCell>
                    <TableCell>{workbookNumber || "-"}</TableCell>
                    <TableCell>{studentCardId || "-"}</TableCell>
                    <TableCell>
                      {(!!studentId || !!employeeId) && (
                        <Button
                          variant="contained"
                          color="error"
                          onClick={() => handleClickDelete(accountId)}
                        >
                          Удалить
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                );
              }
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
