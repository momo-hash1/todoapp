import { Container } from "react-bootstrap";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import React from "react";

const TodoApp = () => {
  const [todos, setTodos] = React.useState([]);
  const [todoId, setId] = React.useState(0)


  const addTodo = (todo) => {
    setTodos([...todos, { id: todoId, text: todo, done: false }]);
    setId(todoId+1)
  };

  const removeTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));
  const changeTodo = (id, text, done) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id)
          return {
            ...todo,
            text: text,
            done: done !== undefined ? done : todo.done,
          };
        return todo;
      })
    );
  };
  const markDone = (id) =>
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) return { ...todo, done: todo.done ? false : true };
        return todo;
      })
    );

  return (
    <Container>
      <div style={{ marginTop: "10px", marginBottom: "10px" }}>
        <TodoInput submit={addTodo} text={""} buttonLabel={"Add"} />
      </div>
      <TodoList
        todos={todos}
        change={changeTodo}
        delete={removeTodo}
        markDone={markDone}
      />
    </Container>
  );
};

export default TodoApp;
