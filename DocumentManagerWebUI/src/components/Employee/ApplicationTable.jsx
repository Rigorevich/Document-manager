import React, { useState } from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
  Select,
  MenuItem,
  TextField,
  Box,
} from "@mui/material";
import { applicationUrl } from "../../constants";
import { BasicModal } from "../AdminControl";

const ApplicationModal = ({ application, applications }) => {
  console.log(applications, application);
  const [status, setStatus] = useState(
    applications.find((s) => s.statusId === application.statusId)
  );
  const [comment, setComment] = useState("");

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSave = () => {
    // Обработка сохранения данных
  };

  return (
    <BasicModal label="Изменить" color="primary" size="small">
      <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
        <Select value={status.name} onChange={handleStatusChange}>
          {applications.statuses?.map((app) => {
            return (
              <MenuItem key={app.statusId} value={app.statusId}>
                {app.name}
              </MenuItem>
            );
          })}
        </Select>
        <TextField
          value={comment}
          onChange={handleCommentChange}
          multiline
          rows={4}
          placeholder="Введите комментарий"
        />
        <Button
          onClick={handleSave}
          sx={{ alignSelf: "flex-end" }}
          variant="contained"
          color="success"
        >
          Сохранить
        </Button>
      </Box>
    </BasicModal>
  );
};

const ApplicationTable = ({ applications, setApplications }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Номер</TableCell>
            <TableCell>ФИ студента</TableCell>
            <TableCell>Факультет</TableCell>
            <TableCell>Специальность</TableCell>
            <TableCell>Группа</TableCell>
            <TableCell>Куратор</TableCell>
            <TableCell>Номер студенческого</TableCell>
            <TableCell>Тип документа</TableCell>
            <TableCell>Статус</TableCell>
            <TableCell>Дата подачи</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {applications.map((application) => (
            <TableRow key={application.applicationId}>
              <TableCell>{application.applicationId}</TableCell>
              <TableCell>
                {application.student.surname} {application.student.name}
              </TableCell>
              <TableCell>
                {application.student.group.specialty.faculty.name}
              </TableCell>
              <TableCell>{application.student.group.specialty.name}</TableCell>
              <TableCell>{application.student.group.groupNumber}</TableCell>
              <TableCell>{application.student.group.tutor || "-"}</TableCell>
              <TableCell>{application.student.studentCardId}</TableCell>
              <TableCell>{application.template.name}</TableCell>
              <TableCell>
                {
                  application.statuses.find(
                    (s) => s.statusId === application.statusId
                  ).name
                }
              </TableCell>
              <TableCell>
                {new Date(application.createdAt).toLocaleString()}
              </TableCell>
              <TableCell>
                <ApplicationModal
                  application={application}
                  applications={applications}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ApplicationTable;
