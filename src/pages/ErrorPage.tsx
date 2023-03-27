import React from "react";
import { Link, useRouteError } from "react-router-dom";

interface RouteError {
  message: string;
}

export default function ErrorPage() {
  const error = useRouteError() as RouteError;

  return (
    <div>
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/">回到首页</Link>
    </div>
  );
}
