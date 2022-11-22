import React from "react";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <div className="animate-comeInTop">
      <Nav />
      <h2 className="text-center text-2xl font-medium text-purple-800 p-5 underline underline-offset-[6px]">
        What can you do ?
      </h2>
      <ul className="list-disc px-10 py-3 space-y-10 ml-5 text-xl">
        <li>Navigate through the website via the Navigation menu</li>
        <li>Enjoy the different animation</li>
        <li>Enjoy the responsivness of the website</li>
      </ul>
      <h2 className="text-center text-2xl font-medium text-purple-800 p-5 underline underline-offset-[6px]">
        On the Todo Page :
      </h2>
      <ul className="list-disc px-10 py-3 space-y-10 ml-5 text-xl">
        <li>Create, edit and delete a Todo</li>
        <li>Change the status of a Todo</li>
        <li>Display the Todo list depending on the status</li>
        <li>Edit the title of the Todo list by clicking on it</li>
        <li>Get a random Todo for today by clicking on the ToDay title</li>
      </ul>
      <h2 className="text-center text-2xl font-medium text-purple-800 p-5 underline underline-offset-[6px]">
        Idea :{" "}
      </h2>
      <ul className="list-disc px-10 py-3 space-y-10 ml-5 text-xl">
        <li>Display calendar</li>
        <li>When Todo is checked, go to the bottom of the list</li>
        <li>Re order the Todos</li>
        <li>Switch between dark and light mode</li>
      </ul>
    </div>
  );
};

export default Home;
