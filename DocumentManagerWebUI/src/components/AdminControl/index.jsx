import React from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import StudentsControl from "./StudentsControl";

export default function AdminControl() {
  return (
    <Container maxWidth="xl" sx={{ my: 3 }}>
      <StudentsControl />
    </Container>
  );
}
