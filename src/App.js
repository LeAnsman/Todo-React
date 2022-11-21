import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calendar from "./pages/Calendar";
import Home from "./pages/Home";
import TodoPage from "./pages/TodoPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/todo" element={<TodoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
