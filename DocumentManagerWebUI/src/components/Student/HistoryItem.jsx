import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { configureDate } from "../../utils/date";

const HistoryItem = ({ application }) => {
  return (
    <TableRow key={application.applicationId}>
      <TableCell>{configureDate(application.createdAt)}</TableCell>
      <TableCell>{application.templateName}</TableCell>
      <TableCell>{application.templateDescription}</TableCell>
      <TableCell>{application.statusName}</TableCell>
      <TableCell>{application.comment}</TableCell>
    </TableRow>
  );
};

export default HistoryItem;
