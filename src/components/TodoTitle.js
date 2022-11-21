import React, { useEffect, useState } from "react";

const TodoTitle = () => {
  const [listTitle, setListTitle] = useState("");

  const listTitleHandler = (e) => {
    e.preventDefault();
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
      localStorage.setItem("listTitle", JSON.stringify([]));
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

  return (
    <div>
      <form>
        <input
          className="text-indigo-900 font-medium text-3xl p-5 flex ml-4 w-11/12"
          type="text"
          name="name"
          onChange={listTitleHandler}
          defaultValue={listTitle}
        />
      </form>
    </div>
  );
};

export default TodoTitle;
