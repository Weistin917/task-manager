import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import { Stack } from "react-bootstrap";
import Adder from "./components/Adder";
import Viewer from "./components/Viewer";

export default function App() {
  const categories = ["Personal", "Work", "Studies", "Family"];
  const [tasks, setTasks] = useState(new Map());
  const [showCat, setShowCat] = useState("All");

  function addTask(taskName, category) {
    newTasks = new Map(tasks);
    newTasks.set(taskName, category);
    setTasks(newTasks);
  }

  function deleteTask(taskName) {
    newTasks = new Map(tasks);
    newTasks.delete(taskName);
    setTasks(newTasks);
  }

  function filterCategory(category) {
    setShowCat(category);
  }

  function getShowTasks() {
    retMap = new Map();
    for (const t of tasks.keys()) {
      if (showCat === "All" || tasks.get(t) === showCat) {
        retMap.set(t, tasks.get(t));
      }
    }
    return retMap;
  }

  return (
    <>
      <div className="App" style={{ textAlign: "left" }}>
        <h1>Task Manager</h1>
      </div>
      <Stack gap={2}>
        <Adder categories={categories} newTask={addTask} />
        <Viewer
          categories={categories}
          tasks={getShowTasks()}
          delTask={deleteTask}
          filter={filterCategory}
        />
      </Stack>
    </>
  );
}
