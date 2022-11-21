import React from "react";

const TodoForm = ({ inputText, setInputText, todos, setTodos, setSelects }) => {
  const choiceHandler = (e) => {
    setSelects(e.target.value);
  };

  const inputTextHandler = (e) => {
    // console.log(e);
    // get the value of the input
    // console.log(e.target.value);
    // passing the value of the input in the setInputText so inputText === e.target.value
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    // to prevent from reloading the page when we hit the submit btn
    e.preventDefault();
    // if there is already some todos, add it to the array
    // so todos is gonna be [{complete:,id:,text:e.target.value}, {same}]
    setTodos([
      ...todos,
      { text: inputText, complete: false, id: Math.random() * 1000 },
    ]);
    // delete the content of the inputText (the value of the input)
    setInputText("");
  };
  return (
    <form className="TODO_FORM mt-1 flex flex-wrap justify-center items-center mb-8">
      <input
        type="text"
        className="TODO_INPUT p-3 rounded-lg border-4 outline-purple-600 shadow-lg w-[60%]"
        placeholder="Type a new todo"
        // Everytime the input change -> inputTextHandler run
        onChange={inputTextHandler}
        // to put the inputText value as a value
        value={inputText}
      />
      <button
        onClick={submitTodoHandler}
        className="TODO_BTN rounded-lg px-2 py-3 bg-purple-100 text-indigo-900 text-lg hover:animate-pulse shadow-lg w-[30%]"
        type="submit"
      >
        Add Todo
      </button>
      <select
        className="TODO_CHOICES rounded-lg p-4   text-indigo-900  shadow-lg cursor-pointer w-[90%]"
        name="todoChoices"
        onChange={choiceHandler}
      >
        <option value="all">All</option>
        <option value="inProgress">In progress</option>
        <option value="complete">Completed</option>
      </select>
    </form>
  );
};

export default TodoForm;
