import React, { useState } from "react";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import { configureDate } from "../../utils/date";
import TextEditor from "./TextEditor";

const TemplateBlock = (template) => {
  const [templateHtml, setTemplateHtml] = useState(template.templateHtml);
  console.log(templateHtml);
  const handleClick = () => {};

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h6" component="div">
            {template.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" my={1}>
            {template.description}
          </Typography>
          <Typography variant="caption" component="h5" color="text.secondary">
            Дата создания: {configureDate(template.createdAt)}
          </Typography>
          <Typography variant="caption" component="h5" color="text.secondary">
            Дата обновления: {configureDate(template.updatedAt)}
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <TextEditor
          templateHtml={templateHtml}
          setTemplateHtml={setTemplateHtml}
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default TemplateBlock;
