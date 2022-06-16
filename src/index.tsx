import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

// import { ProjectList } from "./screens/index";
import reportWebVitals from "./reportWebVitals";
import { loadServer, DevTools } from "jira-dev-tool";
// 在jira-dev-tool后引入 这样可以覆盖jira-dev-tool的样式
import "antd/dist/antd.less";
import { AppProviders } from "context";
import App from "App";

loadServer(() => {
  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );
  root.render(
    <AppProviders>
      <DevTools></DevTools>
      <App />
    </AppProviders>
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
