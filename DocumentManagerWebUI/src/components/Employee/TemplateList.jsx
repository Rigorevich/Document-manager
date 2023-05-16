import React from "react";
import TemplateBlock from "./TemplateBlock";
import { Box } from "@mui/material";

const TemplateList = ({ templates }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        marginBottom: "50px",
      }}
    >
      {templates?.map((template) => (
        <TemplateBlock key={template.templateId} {...template} />
      ))}
    </Box>
  );
};

export default TemplateList;
