import { ListGroup, Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import TodoInput from "../TodoInput";

const TodoItem = (props) => {
  const [isEdit, setEdit] = React.useState(false);
  const changeTodo = (text) => {
    props.change(props.todo.id, text);
    setEdit(false);
  };
    console.log(props.todo);
  return (
    <ListGroup.Item>
      <Container>
        <Row>
          <Col xs={9}>
            {isEdit ? (
              <TodoInput
                submit={(text) => {
                  changeTodo(text);
                }}
                text={props.todo.text}
                buttonLabel="Change"
              />
            ) : (
              <p
                className={
                  props.todo.done ? "text-decoration-line-through" : ""
                }
              >
                {props.todo.text}
              </p>
            )}
          </Col>
          <Col xs={3}>
              <Button
              className="me-2"
                variant="outline-primary"
                onClick={() => {
                  setEdit(true);
                }}
              >
                <i className="bi bi-pen"></i>
              </Button>
              <Button
              className="me-2"
                variant="outline-primary"
                onClick={() => props.delete(props.todo.id)}
              >
                <i className="bi bi-trash3"></i>
              </Button>
              <Button
              
                variant="outline-primary"
                onClick={() => props.markDone(props.todo.id)}
              >
                {props.todo.done ? (
                  <i class="bi bi-check-square-fill"></i>
                ) : (
                  <i class="bi bi-check-square"></i>
                )}
              </Button>
          </Col>
        </Row>
      </Container>
    </ListGroup.Item>
  );
};

export default TodoItem;
