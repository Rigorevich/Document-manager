import React from "react";
import { Container, Box, Button, Modal, Typography } from "@mui/material";
import { roles } from "../../constants/roles";
import StudentsControl from "./StudentsControl";
import Signup from "../../pages/SignUp";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export function BasicModal({
  children,
  color = "success",
  label = "Нажать",
  size = "medium",
}) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{ marginBottom: 20 }}>
      <Button
        variant="contained"
        color={color}
        onClick={handleOpen}
        size={size}
      >
        {label}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  );
}

export default function AdminControl() {
  return (
    <Container maxWidth="xl" sx={{ my: 3 }}>
      <BasicModal label="Добавить профиль">
        <Signup isAdmin={true} />
      </BasicModal>
      <StudentsControl />
    </Container>
  );
}
