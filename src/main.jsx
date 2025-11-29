import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MyRouter from "./routes/MyRouter";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={MyRouter} />
  </StrictMode>
);
