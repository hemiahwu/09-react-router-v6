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
import RootLayout from "./layouts/RootLayout";
import Course from "./pages/Course";
import Home from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="/course" element={<Course />}></Route>
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
