import React from "react";
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import Course from "./pages/Course";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      {/* 加入导航 */}
      <header>
        <nav>
          <h1>导航</h1>
          <NavLink to="/">主页</NavLink> | <NavLink to="/course">课程</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/course" element={<Course />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}
