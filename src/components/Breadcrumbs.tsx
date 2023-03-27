import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();
  //   /help/contact
  let currentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((c) => {
      currentLink += `/${c}`;
      return (
        <div key={c} className="crumb">
          <Link to={currentLink}>{c}</Link>
        </div>
      );
    });

  return <div className="breadcrumbs">{crumbs}</div>;
}
