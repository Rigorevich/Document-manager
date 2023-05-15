import React from "react";
import TextEditor from "../../../components/TextEditor";
import Header from "../../../components/Header";
import { employeePages } from "../../../constants/pages";

const CreateTemplate = () => {
  return (
    <>
      <Header pages={employeePages} />
      <TextEditor />
    </>
  );
};

export default CreateTemplate;
