import { InputGroup, Form, Button } from "react-bootstrap";
import React from "react";

const TodoInput = (props) => {
  const [todoText, setTodoText] = React.useState(props.text);
  return (
    <InputGroup>
      <Form.Control onChange={(e) => setTodoText(e.target.value)} value={todoText}/>
      <Button
        variant="outline-secondary"
        onClick={() => {
          props.submit(todoText);
          setTodoText("")
        }}
      >
        {props.buttonLabel}
      </Button>
    </InputGroup>
  );
};

export default TodoInput;
