import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Card, Button } from "react-bootstrap";

function CatFilter({ categories }) {
  return (
    <Form.Select size="lg" color="#c9c9c9">
      <option value={0}>All</option>
      {categories.map((cat, i) => (
        <option value={i + 1}>{cat}</option>
      ))}
    </Form.Select>
  );
}

function TaskObj() {
  return (
    <Card style={{ textAlign: "left" }}>
      <Card.Header>Category</Card.Header>
      <Card.Body>
        <Card.Title>Task</Card.Title>
        <Button variant="danger">Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default function Viewer({ categories }) {
  return (
    <>
      <div className="h4" style={{ textAlign: "left" }}>
        Current tasks
      </div>
      <h6>Filter by</h6>
      <CatFilter categories={categories} />
      <TaskObj />
    </>
  );
}
