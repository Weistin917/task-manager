import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import { Stack } from "react-bootstrap";
import Adder from "./components/Adder";
import Viewer from "./components/Viewer";

export default function App() {
  const categories = ["Personal", "Work", "Studies", "Family"];
  const [tasks, setTasks] = useState(new Map());

  function addTask(taskName, category) {
    newTasks = new Map(tasks);
    newTasks.set(taskName, category);
    setTasks(newTasks);
  }

  return (
    <>
      <div className="App" style={{ textAlign: "left" }}>
        <h1>Task Manager</h1>
      </div>
      <Stack gap={2}>
        <Adder categories={categories} newTask={addTask} />
        <Viewer categories={categories} tasks={new Map(tasks)} />
      </Stack>
    </>
  );
}
