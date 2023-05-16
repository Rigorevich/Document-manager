import React, { useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Container, Box, Button } from "@mui/material";

export default function TextEditor({ templateHtml, setTemplateHtml }) {
  const editorRef = useRef(null);
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ size: [] }],
      [{ font: [] }],
      [{ align: ["right", "center", "justify"] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ color: ["red", "#785412"] }],
      [{ background: ["red", "#785412"] }],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "color",
    "image",
    "background",
    "align",
    "size",
    "font",
  ];

  const handleSaveAsPDF = () => {
    if (!templateHtml) return;
    const contentHTML = editorRef.current?.getEditor().root.innerHTML;

    // Создайте новое окно браузера и загрузите его содержимое в виде PDF
    const newWindow = window.open("", "_blank");
    newWindow.document.write(`
      <html>
        <head>
        </head>
        <body>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.3/html2pdf.bundle.js"></script>
          <div id="pdf-container"></div>
          <script>
            const element = document.getElementById('pdf-container');
            const options = { filename: 'document.pdf' };
            const pdfPromise = html2pdf().set(options).from(element).save();
          </script>
        </body>
      </html>
    `);
    newWindow.document.close();

    // Вставьте содержимое редактора в новое окно браузера
    newWindow.document.getElementById("pdf-container").innerHTML = templateHtml;
  };

  const handleProcedureContentChange = (content, delta, source, editor) => {
    setTemplateHtml(content);
  };
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          padding: "50px",
          boxShadow: "0px",
        }}
      >
        <ReactQuill
          ref={editorRef}
          theme="snow"
          style={{
            height: "700px",
            width: "1000px",
          }}
          modules={modules}
          formats={formats}
          value={templateHtml}
          onChange={handleProcedureContentChange}
        />
      </Box>
      <Box>
        <Button onClick={handleSaveAsPDF} align="center">
          Сохранить в PDF
        </Button>
      </Box>
    </Container>
  );
}
