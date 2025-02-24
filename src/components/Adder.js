import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";

function TaskForm() {
  return <Form.Control size="lg" type="text" placeholder="New task" />;
}

function CatSelect({ categories }) {
  return (
    <Form.Select size="lg" color="#c9c9c9">
      <option value={0}>Category</option>
      {categories.map((cat) => (
        <option value={1}>{cat}</option>
      ))}
    </Form.Select>
  );
}

function TaskBtn() {
  return (
    <div className="d-grid gap-2">
      <Button variant="primary" type="button">
        Add Task
      </Button>
    </div>
  );
}

export default function Adder({ categories }) {
  return (
    <Form style={{ paddingTop: 20 }}>
      <Form.Group className="mb-3">
        <TaskForm />
      </Form.Group>
      <Form.Group className="mb-3">
        <CatSelect categories={categories} />
      </Form.Group>
      <Form.Group className="mb-3">
        <TaskBtn />
      </Form.Group>
    </Form>
  );
}
