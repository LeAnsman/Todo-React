import React from "react";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <div>
      <Nav />
      <h1 className="text-center text-2xl font-medium text-purple-800 p-5 underline">
        What can you do ?
      </h1>
      <ul className="list-disc px-10 py-3 space-y-10 ml-5 text-xl">
        <li>Navigate through the website via the Navigation menu</li>
        <li>Enjoy the different animation</li>
        <li>Create, edit and delete a Todo</li>
        <li>Change the status of a task (and display the category you want)</li>
        <li>Edit the title of the Todo list</li>
      </ul>
    </div>
  );
};

export default Home;
