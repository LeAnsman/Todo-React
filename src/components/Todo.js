import React from "react";
import TodoEdit from "./TodoEdit";

const Todo = ({
  text,
  todo,
  todos,
  setTodos,
  toggleEditPopup,
  setToggleEditPopup,
  editTextTodo,
  setEditTextTodo,
  editTodoId,
  setEditTodoId,
}) => {
  const deleteHandler = () => {
    localStorage.removeItem("todos");
    setTodos(todos.filter((item) => item.id !== todo.id));
    // filter the todos array and filter out the element the gets clicked on
  };

  const completeHandler = () => {
    // set complete from false to true
    setTodos(
      todos.map((item) => {
        // again, comparing the item clicked and the todo in state
        if (item.id === todo.id) {
          return {
            // return the item but with complete value switched
            ...item,
            complete: !item.complete,
          };
        }
        // else, just return the item
        return item;
      })
    );
  };

  const editHandler = () => {
    setToggleEditPopup(true);
    setEditTextTodo(text);
    setEditTodoId(todo.id);
  };

  return (
    <div className="TODO">
      {/* we are gonna write JS so {}; ?if it's true :if false  */}
      <li className="TODO_ITEM flex flex-col  md:flex-row md:justify-between md:items-center">
        <p
          className={`TODO_ITEM_TXT ${
            todo.complete ? "complete" : ""
          } font-mono animate-comeInReverse relative`}
        >
          {text}
        </p>
        <div className="MODIFY_CONTAINER space-x-10 flex justify-end mt-4 md:justify-center md:items-center md:ml-10 md:mt-0 animate-comeIn">
          <input
            onClick={completeHandler}
            type="checkbox"
            className="TODO_ITEM_CHECKBOX w-6 h-6 cursor-pointer hover:bg-black"
            defaultChecked={todo.complete}
          />
          <button onClick={editHandler} className="TODO_BTN_EDIT">
            <svg
              className="w-[27px] fill-purple-600 hover:fill-purple-800"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
            </svg>
          </button>

          <button onClick={deleteHandler} className="TODO_BTN_DELETE">
            <svg
              className="fill-rose-600 w-6 hover:fill-red-800"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
            </svg>
          </button>
        </div>
      </li>
      <hr className="my-3"></hr>
      <TodoEdit
        todo={todo}
        todos={todos}
        setTodos={setTodos}
        toggleEditPopup={toggleEditPopup}
        setToggleEditPopup={setToggleEditPopup}
        editTextTodo={editTextTodo}
        setEditTextTodo={setEditTextTodo}
        editTodoId={editTodoId}
      />
      <style>{`
        .complete {
          color: #b3b3b3;
          transition: color 0.8s;
          position: relative;
          width: fit-content;
        }
        .complete::after {
            content: "";
            width: 100%;
            height: 2px;
            background-color: #b3b3b3;
            position: absolute;
            top: 40%;
            right: 0;
            animation: comeInReverse 1s; 
        }
      `}</style>
    </div>
  );
};

export default Todo;
