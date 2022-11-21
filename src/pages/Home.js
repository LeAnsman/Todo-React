import React from "react";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <div>
      <Nav />
      <h1>What can you do ?</h1>
      <ul>
        <li>Navigate through the website via the nav bar</li>
        <li>Enjoy the different animation / hover</li>
        <li>Create and delete a task</li>
        <li>Change the status of a task</li>
        <li>Select the category you want to display</li>
        <li>Edit the title !</li>
        <li>Coming soon : edit the todos</li>
      </ul>
    </div>
  );
};

export default Home;
