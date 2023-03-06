import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="help-layout">
      <h2>有问题找老吴</h2>

      <nav>
        <ul>
          <li>
            <NavLink to="faq">常见问题</NavLink>
          </li>
          <li>
            <NavLink to="contact">联系老吴</NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}
