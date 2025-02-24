import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";

function TaskForm({ id }) {
  return <Form.Control size="lg" type="text" placeholder="New task" id={id} />;
}

function CatSelect({ categories, id }) {
  return (
    <Form.Select size="lg" color="#c9c9c9" id={id}>
      <option value={0}>Category</option>
      {categories.map((cat) => (
        <option value={cat}>{cat}</option>
      ))}
    </Form.Select>
  );
}

function TaskBtn({ newTask }) {
  function handleClick() {
    const task = document.getElementById("taskform").value;
    const category = document.getElementById("catselect").value;
    newTask(task, category);
  }

  return (
    <div className="d-grid gap-2">
      <Button
        variant="primary"
        type="button"
        onClick={() => {
          handleClick();
        }}
      >
        Add Task
      </Button>
    </div>
  );
}

export default function Adder({ categories, newTask }) {
  return (
    <Form style={{ paddingTop: 20 }}>
      <Form.Group className="mb-3">
        <TaskForm id="taskform" />
      </Form.Group>
      <Form.Group className="mb-3">
        <CatSelect categories={categories} id="catselect" />
      </Form.Group>
      <Form.Group className="mb-3">
        <TaskBtn newTask={newTask} />
      </Form.Group>
    </Form>
  );
}
