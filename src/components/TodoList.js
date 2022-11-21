import React from "react";
import Todo from "./Todo";

const TodoList = ({
  todos,
  setTodos,
  filteredTodos,
  toggleEditPopup,
  setToggleEditPopup,
  editTextTodo,
  setEditTextTodo,
  editTodoId,
  setEditTodoId,
}) => {
  return (
    <div className="TODO_CONTAINER px-10">
      <ul className="TODO_LIST space-y-5">
        {/* Map through the todo and display Todo */}
        {filteredTodos.map((todo) => (
          <Todo
            // pass the props
            toggleEditPopup={toggleEditPopup}
            setToggleEditPopup={setToggleEditPopup}
            todo={todo}
            text={todo.text}
            key={todo.id}
            setTodos={setTodos}
            todos={todos}
            editTextTodo={editTextTodo}
            setEditTextTodo={setEditTextTodo}
            editTodoId={editTodoId}
            setEditTodoId={setEditTodoId}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
