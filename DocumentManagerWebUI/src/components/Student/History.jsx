import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import HistoryItem from "./HistoryItem";
import { Typography } from "@mui/material";

const History = ({ applications = [] }) => {
  if (applications?.length === 0) {
    return (
      <Typography variant="h5" sx={{ marginTop: 5 }}>
        Заявок пока нет
      </Typography>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Дата заказа</TableCell>
            <TableCell>Название документа</TableCell>
            <TableCell>Описание документа</TableCell>
            <TableCell>Статус заявки</TableCell>
            <TableCell>Комментарий</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.isArray(applications) &&
            applications?.map((application) => (
              <HistoryItem
                key={application.applicationId}
                application={application}
              />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default History;
