import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import { Stack } from "react-bootstrap";
import Adder from "./components/Adder";
import Viewer from "./components/Viewer";

export default function App() {
  const categories = ["Personal", "Work", "Studies", "Family"];

  return (
    <>
      <div className="App" style={{ textAlign: "left" }}>
        <h1>Task Manager</h1>
      </div>
      <Stack gap={2}>
        <Adder categories={categories} />
        <Viewer categories={categories} />
      </Stack>
    </>
  );
}
