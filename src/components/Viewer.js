import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Card, Button } from "react-bootstrap";

function CatFilter({ categories, filter, id }) {
  return (
    <Form.Select
      size="lg"
      color="#c9c9c9"
      onChange={(e) => {
        const category = e.target.value;
        filter(category);
      }}
    >
      <option value="All">All</option>
      {categories.map((cat) => (
        <option value={cat}>{cat}</option>
      ))}
    </Form.Select>
  );
}

function TaskObj({ category, taskName, delTask }) {
  return (
    <Card style={{ textAlign: "left" }}>
      <Card.Header>{category}</Card.Header>
      <Card.Body>
        <Card.Title>{taskName}</Card.Title>
        <Button variant="danger" onClick={() => delTask(taskName)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default function Viewer({ categories, tasks, delTask, filter }) {
  return (
    <>
      <div className="h4" style={{ textAlign: "left" }}>
        Current tasks
      </div>
      <h6>Filter by</h6>
      <CatFilter categories={categories} filter={filter} id="catfilter" />
      {[...tasks.keys()].map((t) => (
        <TaskObj category={tasks.get(t)} taskName={t} delTask={delTask} />
      ))}
    </>
  );
}
