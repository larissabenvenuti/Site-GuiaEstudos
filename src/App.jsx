import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import "./styles/Global.module.css";
import UserProvider from "./contexts/user";

export default function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <AppRouter />
      </UserProvider>
    </BrowserRouter>
  );
}
