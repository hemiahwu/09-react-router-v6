import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>导航</h1>

          <ul>
            <li>
              <NavLink to="/">主页</NavLink>
            </li>
            <li>
              <NavLink to="/course">课程</NavLink>
            </li>
            <li>
              <NavLink to="/help">求助</NavLink>
            </li>
          </ul>
        </nav>
        <Breadcrumbs />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
