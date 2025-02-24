import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import { Stack } from "react-bootstrap";
import Adder from "./components/Adder";
import Viewer from "./components/Viewer";

export default function App() {
  const categories = ["Personal", "Work", "Studies", "Family"];
  const [tasks, setTasks] = useState(new Map()); // Map of tasks; maps the task name to the task category
  const [showCat, setShowCat] = useState("All"); // String that represents the category to show

  // adds a new task to the list
  function addTask(taskName, category) {
    newTasks = new Map(tasks);
    newTasks.set(taskName, category);
    setTasks(newTasks);
  }

  // deletes a task from the list
  function deleteTask(taskName) {
    newTasks = new Map(tasks);
    newTasks.delete(taskName);
    setTasks(newTasks);
  }

  // filters the category to show
  function filterCategory(category) {
    setShowCat(category);
  }

  // gets a copy of the tasks containing only the tasks to show
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
