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
      <div className="POPUP_INNER relative p-8 w-[90%] max-w-2xl bg-purple-200 shadow-lg flex flex-col rounded-lg animate-appear">
        <input
          type="text"
          className="TODO_INPUT p-3 rounded-lg mb-8 h-fit outline-purple-600 shadow-lg"
          placeholder="Type a new todo"
          // Everytime the input change -> inputTextHandler run
          onChange={inputTextEditHandler}
          // to put the inputText value as a value
          defaultValue={editTextTodo}
        />
        <div className="POPUP_BTN flex justify-between">
          <button
            className="CONFIRM_BTN bg-transparent hover:bg-purple-600 text-indigo-900 font-semibold hover:text-white py-2 px-4 border border-purple-600 hover:border-transparent rounded-lg"
            onClick={editTextHandler}
          >
            Confirm Changes
          </button>
          <button
            className="CLOSE_BTN bg-transparent hover:bg-red-800 text-rose-600 font-semibold hover:text-white py-2 px-4 border border-rose-600 hover:border-transparent rounded-lg"
            onClick={() => setToggleEditPopup(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default TodoEdit;
