import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HelpLayout from "./layouts/HelpLayout";
import RootLayout from "./layouts/RootLayout";
import Course, { courseLoader } from "./pages/Course";
import CourseDetail, { courseDetailLoader } from "./pages/CourseDetail";
import Contact from "./pages/help/Contact";
import Faq from "./pages/help/Faq";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="/course" element={<Course />} loader={courseLoader}></Route>
      <Route
        path="/course/:id"
        element={<CourseDetail />}
        loader={courseDetailLoader}
      ></Route>
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} /> {/* /help/faq */}
        <Route path="contact" element={<Contact />} /> {/* /help/contact */}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
