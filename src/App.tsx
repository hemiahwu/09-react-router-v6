import React from "react";
import {
  Route,
  Routes,
  Link,
  NavLink,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Course from "./pages/Course";
import Home from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/course" element={<Course />}></Route>
    </Route>
  )
);

export default function App() {
  return (
    <>
      <header>
        <nav>
          <h1>导航</h1>
          <NavLink to="/">主页</NavLink> | <NavLink to="/course">课程</NavLink>
        </nav>
      </header>

      <RouterProvider router={router} />
    </>
  );
}
