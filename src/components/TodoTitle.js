import React, { useEffect, useState } from "react";

const TodoTitle = () => {
  const [listTitle, setListTitle] = useState("");
  const [titlePopup, setTitlePopup] = useState(false);

  const titlePopupHandler = () => {
    setTitlePopup(true);
  };

  const listTitleHandler = (e) => {
    setListTitle(e.target.value);
  };

  const saveLocalListTitle = () => {
    // needed to add a condition because not saving on reload
    if (listTitle.length > 0) {
      // pushing everything in the key "listTitle"
      localStorage.setItem("listTitle", JSON.stringify(listTitle));
    }
  };

  const getLocalListTitle = () => {
    // if there is no todo, create a empty array in local storage
    if (localStorage.getItem("listTitle") === null) {
      localStorage.setItem(
        "listTitle",
        JSON.stringify("Click here to enter the title")
      );
    } else {
      // if there is listTitle, parse them en set them as listTitle
      const titleLocal = JSON.parse(localStorage.getItem("listTitle"));
      setListTitle(titleLocal);
    }
  };
  useEffect(() => {
    getLocalListTitle();
  }, []);

  useEffect(() => {
    saveLocalListTitle();
    // eslint-disable-next-line
  }, [listTitle]);

  return titlePopup ? (
    <div>
      <h3 className="text-indigo-900 font-medium text-5xl p-10 text-center">
        {listTitle}
      </h3>

      <div className="POPUP POPUP fixed top-0 left-0 w-full h-screen bg-gray-400 bg-opacity-20 flex justify-center items-center z-10">
        <div className="relative p-8 w-[90%] max-w-2xl bg-purple-200 shadow-lg rounded-lg animate-appear">
          <form className="flex flex-col space-y-8 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center">
            <input
              className="TODO_INPUT p-3 rounded-lg h-fit outline-purple-600 shadow-lg sm:w-[65%]"
              type="text"
              name="name"
              onChange={listTitleHandler}
              defaultValue={listTitle}
              placeholder="Click here to modify the title"
            />

            <button
              onClick={() => setTitlePopup(false)}
              className="CONFIRM_BTN mx-auto sm:mx-0 shadow-lg bg-transparent hover:bg-purple-600 text-indigo-900 font-semibold hover:text-white py-2 px-4 border-4 border-purple-600 hover:border-transparent rounded-lg"
            >
              Confirm Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  ) : (
    <button onClick={titlePopupHandler} className="flex mx-auto">
      <h3 className="text-indigo-900 font-medium text-5xl p-10">{listTitle}</h3>
    </button>
  );
};

export default TodoTitle;
