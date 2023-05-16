import React from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";

const ApplicationTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Имя студента</TableCell>
            <TableCell>Факультет</TableCell>
            <TableCell>Группа</TableCell>
            <TableCell>Номер студенческого</TableCell>
            <TableCell>Тип документа</TableCell>
            <TableCell>Статус</TableCell>
            <TableCell>Дата подачи</TableCell>
          </TableRow>
        </TableHead>
        {/*<TableBody>*/}
        {/*    {students.map((student) => (*/}
        {/*        <TableRow key={student.id} onClick={() => onRowClick(student.id)}>*/}
        {/*            <TableCell>{student.name}</TableCell>*/}
        {/*            <TableCell>{student.faculty}</TableCell>*/}
        {/*            <TableCell>{student.group}</TableCell>*/}
        {/*            <TableCell>{student.studentId}</TableCell>*/}
        {/*            <TableCell>{student.documentType}</TableCell>*/}
        {/*            <TableCell>{student.status}</TableCell>*/}
        {/*            <TableCell>{student.submissionDate}</TableCell>*/}
        {/*        </TableRow>*/}
        {/*    ))}*/}
        {/*</TableBody>*/}
      </Table>
    </TableContainer>
  );
};

export default ApplicationTable;
