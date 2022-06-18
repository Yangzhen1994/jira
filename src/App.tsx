import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.svg";
import "./App.css";
import { useAuth } from "context/auth-context";
import { AuthedApp } from "authted-app";
import { UnauthApp } from "no-auth-app";
import { ErrorBoundary } from "components/error-bounds";
import { FullPageError } from "components/lib";

function App() {
  const { user } = useAuth();
  return (
    <ErrorBoundary fallbackRender={FullPageError}>
      <div className="App">{user ? <AuthedApp /> : <UnauthApp />}</div>;
    </ErrorBoundary>
  );
}

export default App;
