import React from "react";
import { RouterProvider } from "react-router-dom";
import Router from "./Router";

const App: React.FC = () => {
  return <RouterProvider router={Router}></RouterProvider>;
};

export default App;
