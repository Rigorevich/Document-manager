import React from "react";
import Header from "../../components/Header";

import { useSelector } from "react-redux";

export default function Home() {
  const { role } = useSelector((state) => state.account);
  return (
    <>
      <Header />
    </>
  );
}
