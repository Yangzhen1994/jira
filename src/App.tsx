import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.svg";
import "./App.css";
import { useAuth } from "context/auth-context";
import { AuthedApp } from "authted-app";
import { UnauthApp } from "no-auth-app";

function App() {
  const { user } = useAuth();
  return <div className="App">{user ? <AuthedApp /> : <UnauthApp />}</div>;
}

export default App;
