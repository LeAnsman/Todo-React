import React from "react";

const TodoEdit = ({
  todos,
  setTodos,
  toggleEditPopup,
  setToggleEditPopup,
  editTextTodo,
  setEditTextTodo,
  editTodoId,
}) => {
  const inputTextEditHandler = (e) => {
    setEditTextTodo(e.target.value);
  };
  const editTextHandler = () => {
    setTodos(
      todos.map((item) => {
        // again, comparing the item clicked and the todo in state
        if (item.id === editTodoId) {
          return {
            // return the item but with complete value switched
            ...item,
            text: editTextTodo,
          };
        }
        // else, just return the item
        return item;
      })
    );
    setToggleEditPopup(false);
  };
  return toggleEditPopup ? (
    <div className="POPUP fixed top-0 left-0 w-full h-screen bg-gray-400 bg-opacity-20 flex justify-center items-center">
      <div className="POPUP_INNER relative p-8 w-full max-w-2xl bg-purple-200 shadow-sm">
        {/* <button
          className="CLOSE_BTN absolute top-4 right-4 border-red-500 border-2 p-2"
          onClick={() => setToggleEditPopup(false)}
        >
          x
        </button> */}
        <input
          type="text"
          className="TODO_INPUT p-3 rounded-lg mb-8 ml-8 border-4 outline-purple-600 shadow-lg"
          placeholder="Type a new todo"
          // Everytime the input change -> inputTextHandler run
          onChange={inputTextEditHandler}
          // to put the inputText value as a value
          defaultValue={editTextTodo}
        />
        <button onClick={editTextHandler}>Confirm Changes</button>
      </div>
    </div>
  ) : (
    ""
  );
};

export default TodoEdit;
