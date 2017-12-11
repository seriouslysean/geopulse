import React from "react";
import App from "../components/App";
import FeedPage from "../pages/FeedPage";
import AboutPage from "../pages/AboutPage";
import NotFoundPage from "../pages/NotFoundPage";

export default [
  {
    ...App,
    routes: [
      {
        ...FeedPage,
        path: "/",
        exact: true
      },
      {
        ...AboutPage,
        path: "/about"
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
