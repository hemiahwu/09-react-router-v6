import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Course from "./pages/Course";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/course" element={<Course />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}
