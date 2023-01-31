import { ListGroup } from "react-bootstrap";
import TodoItem from "./TodoList/TodoItem";

const TodoList = (props) => {
  return (
    <ListGroup>
      {props.todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          delete={props.delete}
          change={props.change}
          markDone={props.markDone}
        />
      ))}
    </ListGroup>
  );
};

export default TodoList;
