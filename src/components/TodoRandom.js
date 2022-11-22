import React, { useEffect, useState } from "react";

const TodoRandom = ({ todos }) => {
  // get the filtered array of inProgress
  const [filteredTodosRandom, setFilteredTodosRandom] = useState([]);
  const [randomTodo, setRandomTodo] = useState("");
  const [toggleRandomTodo, setToggleRandomTodo] = useState(false);

  useEffect(() => {
    setFilteredTodosRandom(todos.filter((todo) => todo.complete === false));
    console.log(filteredTodosRandom);
    //eslint-disable-next-line
  }, [todos]);

  const randomTodosHandler = () => {
    if (filteredTodosRandom.length === 0) {
      alert("Please add some todos");
      return;
    } else {
      const random = Math.floor(Math.random() * filteredTodosRandom.length);
      setRandomTodo(filteredTodosRandom[random].text);
      setToggleRandomTodo(true);
    }
  };
  return toggleRandomTodo ? (
    <div className="POPUP fixed top-0 left-0 w-full h-screen bg-gray-400 bg-opacity-20 flex justify-center items-center">
      <div className="POPUP_INNER relative p-8 w-[90%] max-w-2xl bg-purple-200 shadow-lg flex flex-col rounded-lg animate-appear">
        <p className="text-center font-xl text-lg underline-offset-8 underline">
          Your ToDay is :
        </p>
        <div className="POPUP_BTN flex justify-between items-center p-10">
          <h3 className="font-extrabold text-xl ">{randomTodo}</h3>
          <button
            onClick={() => {
              setToggleRandomTodo(false);
            }}
            className="CONFIRM_BTN bg-transparent hover:bg-purple-600 text-indigo-900 font-semibold hover:text-white py-2 px-4 border border-purple-600 hover:border-transparent rounded-lg"
          >
            Let's do it !
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <button
        className="absolute top-6 left-7 w-36 h-14 z-10"
        onClick={randomTodosHandler}
      ></button>
    </div>
  );
};

export default TodoRandom;
